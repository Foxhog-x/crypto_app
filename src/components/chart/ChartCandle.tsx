import { createChart, IChartApi } from "lightweight-charts";
import { useEffect, useRef, useState } from "react";
import WatchList from "../Watchlist";

interface CandleData {
  name: string;
  time_frame: string;
  open: number;
  close: number;
  high: number;
  low: number;
  volume: number;
  time: number; // Store time as a Unix timestamp
}

const timeFrames = ["1m", "3m", "5m"];

export default function ChartCandle() {
  const chartContainerRef = useRef<HTMLDivElement | null>(null);
  const [loading, setLoading] = useState(true); // Loader state

  const [currency, setCurrency] = useState("btcusdt");
  const [timeFrame, setTimeFrame] = useState("1m");
  const chartRef = useRef<IChartApi | null>(null);
  const [candleStickData, setCandleStickData] = useState<CandleData[]>([]);
  const candleStickChartRef = useRef<any>(null);
  const currentCandleRef = useRef<CandleData | null>(null);

  useEffect(() => {
    const storedData = localStorage.getItem(currency);
    const parsedData: CandleData[] = storedData ? JSON.parse(storedData) : [];
    const currenceyname = currency;
    const filteredData = parsedData.filter(
      (item: CandleData) =>
        item.name === currenceyname.toUpperCase() &&
        item.time_frame === timeFrame
    );
    console.log(filteredData, "filter");
    setCandleStickData(filteredData);
  }, [currency, timeFrame]);

  useEffect(() => {
    if (chartContainerRef.current !== null) {
      chartRef.current = createChart(chartContainerRef.current, {
        width: chartContainerRef.current.clientWidth,
        height: chartContainerRef.current.clientHeight,
        layout: { background: { color: "#ffffff" }, textColor: "#000" },
        grid: {
          vertLines: { color: "#e0e0e0" },
          horzLines: { color: "#e0e0e0" },
        },
        timeScale: {
          timeVisible: true,
          secondsVisible: false,
          tickMarkFormatter: (time) => {
            const date = new Date(time * 1000);
            return date.toLocaleTimeString();
          },
        },
      });

      candleStickChartRef.current = chartRef.current.addCandlestickSeries({
        upColor: "#26a69a",
        downColor: "#ef5350",
        borderVisible: false,
        wickUpColor: "#26a69a",
        wickDownColor: "#ef5350",
      });
    }

    const ws = new WebSocket(
      `wss://stream.binance.com:9443/ws/${currency}@kline_${timeFrame}`
    );

    ws.onmessage = (event) => {
      const socketData = JSON.parse(event.data);
      const values = socketData.k;

      const candle: CandleData = {
        name: values.s,
        time_frame: values.i,
        open: parseFloat(values.o),
        close: parseFloat(values.c),
        high: parseFloat(values.h),
        low: parseFloat(values.l),
        volume: parseFloat(values.v),
        time: values.t,
      };

      if (values.x) {
        setCandleStickData((prevData) => {
          const updatedData = [...prevData, candle];
          updatedData.sort((a, b) => a.time - b.time);
          return updatedData.slice(-100);
        });

        const storedData = localStorage.getItem(currency);
        const parsedData = storedData ? JSON.parse(storedData) : [];
        const newData = [...parsedData, candle];
        localStorage.setItem(currency, JSON.stringify(newData));

        currentCandleRef.current = null;
      } else {
        if (currentCandleRef.current) {
          currentCandleRef.current = {
            ...currentCandleRef.current,
            close: candle.close,
            high: Math.max(currentCandleRef.current.high, candle.high),
            low: Math.min(currentCandleRef.current.low, candle.low),
          };
        } else {
          currentCandleRef.current = candle;
        }

        if (candleStickChartRef.current) {
          candleStickChartRef.current.update({
            time: candle.time / 1000,
            open: candle.open,
            close: candle.close,
            high: candle.high,
            low: candle.low,
          });
        }
      }
    };

    return () => {
      ws.close();
      if (chartRef.current) {
        chartRef.current.remove();
      }
    };
  }, [currency, timeFrame]);

  useEffect(() => {
    if (candleStickChartRef.current) {
      const updatedCandleData = currentCandleRef.current
        ? [...candleStickData, currentCandleRef.current]
        : candleStickData;

      const uniqueData = updatedCandleData.reduce(
        (acc: CandleData[], current) => {
          const x = acc.find((item) => item.time === current.time);
          if (!x) {
            return acc.concat([current]);
          } else {
            return acc;
          }
        },
        []
      );

      uniqueData.sort((a, b) => a.time - b.time);

      candleStickChartRef.current.setData(
        uniqueData.map((data) => ({
          time: data.time / 1000,
          open: data.open,
          close: data.close,
          high: data.high,
          low: data.low,
        }))
      );
    }
  }, [candleStickData]);

  const handleSelectedCoin = (coin) => {
    setCurrency(coin.toLowerCase());
  };

  return (
    <>
      <div className="w-16 flex flex-col gap-4 mt-5">
        {timeFrames.map((time) => {
          return (
            <button
              key={time}
              className={`flex w-12 h-12 rounded shadow-md items-center justify-center ${
                timeFrame === time ? "bg-blue-500" : ""
              }`}
              onClick={() => setTimeFrame(time)}
            >
              {time}
            </button>
          );
        })}
      </div>
      <div ref={chartContainerRef} className="flex-[4] border"></div>
      <div className="sm:block hidden">
        <WatchList
          handleSelectedCoin={handleSelectedCoin}
          currency={currency}
        />
      </div>
    </>
  );
}

import { createChart } from "lightweight-charts";
import { useEffect, useRef } from "react";
import { IChartApi } from "lightweight-charts";

export default function ChartCandle() {
  const chartContainerRef = useRef<HTMLDivElement | null>(null);
  const chartRef = useRef<IChartApi | null>(null);

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
        timeScale: { timeVisible: true, secondsVisible: false },
      });
      const candleSeries = chartRef.current.addCandlestickSeries({
        upColor: "#26a69a",
        downColor: "#ef5350",
        borderVisible: false,
        wickUpColor: "#26a69a",
        wickDownColor: "#ef5350",
      });
      const data = [
        { open: 10, high: 10.63, low: 9.49, close: 9.55, time: 1642427876 },
        { open: 9.55, high: 10.3, low: 9.42, close: 9.94, time: 1642514276 },
        { open: 9.94, high: 10.17, low: 9.92, close: 9.78, time: 1642600676 },
        { open: 9.78, high: 10.59, low: 9.18, close: 9.51, time: 1642687076 },
        { open: 9.51, high: 10.46, low: 9.1, close: 10.17, time: 1642773476 },
        {
          open: 10.17,
          high: 10.96,
          low: 10.16,
          close: 10.47,
          time: 1642859876,
        },
        { open: 10.47, high: 11.39, low: 10.4, close: 10.81, time: 1642946276 },
        { open: 10.81, high: 11.6, low: 10.3, close: 10.75, time: 1643032676 },
        { open: 10.75, high: 11.6, low: 10.49, close: 10.93, time: 1643119076 },
        {
          open: 10.93,
          high: 11.53,
          low: 10.76,
          close: 10.96,
          time: 1643205476,
        },
      ];

      candleSeries.setData(data);
      chartRef.current.timeScale().fitContent();
    }

    return () => {
      if (chartRef.current) {
        chartRef.current.remove();
      }
    };
  }, []);
  return (
    <div
      ref={chartContainerRef}
      style={{ width: "100%", height: "100%" }}
      className="flex-[4] border "
    ></div>
  );
}

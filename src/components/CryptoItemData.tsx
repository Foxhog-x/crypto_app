import React from "react";

export default function CryptoItemData({ candleStickData }: any) {
  console.log(candleStickData);
  return (
    <div className="flex-[1] shadow-lg">
      <div className="p-2 mt-2">
        <div className=" flex flex-col gap-3">
          <div className="flex justify-between ">
            <span className="flex gap-2 text-2xl">BTC/USD</span>
            <div>
              <div className="flex-wrap">1 min Data</div>
            </div>
          </div>
          <span className="text-3xl">$56000</span>
        </div>
        <div className="mt-3 p-2 flex flex-col rounded-lg gap-4 border border-black">
          <div className="flex flex-col gap-3">
            <p className="flex justify-between">
              <span className="w-1/2 text-left">Open Price :</span>
              <span className="w-1/2 text-right">4353 USDT</span>
            </p>
            <p className="flex justify-between">
              <span className="w-1/2 text-left">Close Price :</span>
              <span className="w-1/2 text-right">345345 USDT</span>
            </p>
            <p className="flex justify-between">
              <span className="w-1/2 text-left">High Price :</span>
              <span className="w-1/2 text-right">345 USDT</span>
            </p>
            <p className="flex justify-between">
              <span className="w-1/2 text-left">Low Price :</span>
              <span className="w-1/2 text-right">435345 USDT</span>
            </p>
            <p className="flex justify-between">
              <span className="w-1/2 text-left">Number of Trades :</span>
              <span className="w-1/2 text-right">435345</span>
            </p>
            <p className="flex justify-between">
              <span className="w-1/2 text-left">Quote Volume :</span>
              <span className="w-1/2 text-right">3434 USDT</span>
            </p>
            <p className="flex justify-between">
              <span className="w-1/2 text-left">Taker Buy Volume :</span>
              <span className="w-1/2 text-right">4345 BTC</span>
            </p>
            <p className="flex justify-between">
              <span className="w-1/2 text-left">Taker Buy Quote Volume :</span>
              <span className="w-1/2 text-right">435 USDT</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

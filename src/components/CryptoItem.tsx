import React from "react";

export default function CryptoItem() {
  return (
    <div className="flex-[0.8] border bg-blue-200 ">
      <div className="flex p-2 shadow-md justify-between">Watchlist</div>
      <li className="p-1 list-none flex ">
        <button className="w-full flex justify-start items-center flex-wrap gap-2">
          <img
            className="w-12 h-12 rounded-full"
            src="https://media.istockphoto.com/id/882085928/vector/blockchain-bitcoin-icon-symbol-vector.jpg?s=612x612&w=0&k=20&c=uv_6f1BKQBRS8UQfz6TZTN2GoOZ--lUHojCpvGvm_4Y= "
            alt="A"
          />
          BTC/USD
        </button>
      </li>
    </div>
  );
}

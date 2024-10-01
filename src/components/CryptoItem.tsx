interface CryptoItemProps {
  handleSelectedCoin: (value: string) => void;
  currency: string;
}
export default function CryptoItem({
  handleSelectedCoin,
  currency,
}: CryptoItemProps) {
  const coinsList = [
    { name: "BTC/USDT" },
    { name: "BNB/USDT" },
    { name: "DOT/USDT" },
  ];

  console.log(currency, "currenceyname");
  return (
    <div className="flex-[0.8] border sm:hidden md:block min-w-48 ">
      <div className="flex p-2 shadow-md justify-between">Watchlist</div>

      {coinsList.map((coin) => {
        const coinName = coin.name;
        const joinName = coinName.replace("/", "").toLowerCase();

        return (
          <li key={coin.name} className="p-1 list-none flex ">
            <button
              className={`w-full flex justify-start items-center flex-wrap gap-2 p-2 rounded-lg transition-colors duration-200 ${
                currency === joinName
                  ? "bg-blue-400 text-white"
                  : "text-gray-800 hover:bg-gray-200"
              }`}
              onClick={() => handleSelectedCoin(joinName)}
            >
              {/* <img
                className="w-12 h-12 rounded-full"
                src="https://media.istockphoto.com/id/882085928/vector/blockchain-bitcoin-icon-symbol-vector.jpg?s=612x612&w=0&k=20&c=uv_6f1BKQBRS8UQfz6TZTN2GoOZ--lUHojCpvGvm_4Y= "
                alt="A"
              /> */}
              {coin.name}
            </button>
          </li>
        );
      })}
    </div>
  );
}

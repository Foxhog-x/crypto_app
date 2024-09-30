import CryptoItem from "../components/CryptoItem";
import CryptoItemData from "../components/CryptoItemData";
import NavLinks from "../components/NavLinks";
import Header from "./Header";

export default function Layout() {
  return (
    <>
      <div className="flex">
        <div className="min-h-screen overflow-hidden shadow-md border border-black w-48 sm:block hidden">
          <div className="flex gap-1 items-center border-b border-black p-5">
            <img
              className="w-12 h-12 rounded"
              src="/trade-1.svg"
              alt="Default avatar"
            />
            <div className="flex-wrap">
              <h3 className="text-2xl">Trading</h3>
            </div>
          </div>
          <NavLinks />
        </div>
        <div className="flex-1">
          <div>
            <Header />
          </div>
          <div className="flex gap-2 border border-red-500 min-h-screen p-3">
            <div className="flex-[4] border bg-blue-200">
              {/* //candle chart sec */}
            </div>
            <div className="flex-[1] border bg-green-200">
              <div className="p-2 mt-2">
                <CryptoItemData />
              </div>
            </div>
            <div className="flex-[0.8] border bg-blue-200 ">
              <div className="flex p-2 shadow-md justify-between">
                Watchlist
              </div>
              <CryptoItem />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

import CryptoItem from "./CryptoItem";

export default function WatchList({ handleSelectedCoin, currency }) {
  return (
    <CryptoItem handleSelectedCoin={handleSelectedCoin} currency={currency} />
  );
}

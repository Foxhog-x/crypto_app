import CryptoItem from "./CryptoItem";
interface CryptoItemProps {
  handleSelectedCoin: (value: string) => void;
  currency: string;
}
export default function WatchList({
  handleSelectedCoin,
  currency,
}: CryptoItemProps) {
  return (
    <CryptoItem handleSelectedCoin={handleSelectedCoin} currency={currency} />
  );
}

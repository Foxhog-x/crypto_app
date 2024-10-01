import { Route, Routes } from "react-router-dom";
import Layout from "../layout/Layout";
import ChartCandle from "../components/chart/ChartCandle";
import CryptoItemData from "../components/CryptoItemData";
import WatchList from "../components/Watchlist";

export default function AppRouter() {
  return (
    <Routes>
      <Route
        path="/homepage"
        element={
          <Layout>
            <ChartCandle />
            <CryptoItemData />
            <WatchList />
          </Layout>
        }
      ></Route>
    </Routes>
  );
}

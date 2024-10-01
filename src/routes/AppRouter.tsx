import { Route, Routes } from "react-router-dom";
import Layout from "../layout/Layout";
import ChartCandle from "../components/chart/ChartCandle";

export default function AppRouter() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout>
            <ChartCandle />
          </Layout>
        }
      ></Route>
    </Routes>
  );
}

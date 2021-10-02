import React from "react";
import { useApi } from "hooks";
import { useParams } from "react-router";
import { CoinDetailPageHeader, CoinPriceChart } from "components";
import { useSelector } from "react-redux";

import "./CoinDetailPage.scss";

function CointDetailPage() {
   const { fetchCoinInfo, fetchCoinMarketData } = useApi();

   const { id } = useParams();

   const coin = useSelector((state) => state.coinDetailPage);

   React.useEffect(() => {
      fetchCoinInfo(id);
      fetchCoinMarketData(id);
   }, [id]);

   if (!coin.info) {
      return null;
   }

   return (
      <section className="coin-detail-page">
         <CoinDetailPageHeader />

         <CoinPriceChart />
      </section>
   );
}

export default CointDetailPage;

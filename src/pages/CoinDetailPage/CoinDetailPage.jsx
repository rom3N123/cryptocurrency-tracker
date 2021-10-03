import React from "react";
import { useApi } from "hooks";
import { useParams } from "react-router";
import {
   CoinDetailPageHeader,
   CoinChart,
   ChartFilters,
   SkeletonCoinDetailPage,
} from "components";
import { useSelector } from "react-redux";

import "./CoinDetailPage.scss";

function CointDetailPage() {
   const { fetchCoinInfo, fetchCoinMarketData } = useApi();

   const { id } = useParams();

   const state = useSelector((state) => state);

   React.useEffect(() => {
      fetchCoinInfo(id);
   }, [id]);

   React.useEffect(() => {
      fetchCoinMarketData(id);
   }, [state.searchParams.chart, id]);

   if (!state.coinDetailPage.info) {
      return null;
   }

   return (
      <>
         {state.fetchStatus.coinInfo && state.fetchStatus.coinMarketData ? (
            <SkeletonCoinDetailPage />
         ) : (
            <section className="coin-detail-page">
               <CoinDetailPageHeader />

               <div className="coin-detail-page__charts">
                  <div className="container">
                     <h3 className="coin-detial-page__chart-label">
                        {state.coinDetailPage.info.name} to USD Chart
                     </h3>
                     <ChartFilters />
                     <CoinChart />
                  </div>
               </div>
            </section>
         )}
      </>
   );
}

export default CointDetailPage;

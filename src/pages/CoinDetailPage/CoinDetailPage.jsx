import React from "react";
import { useApi } from "hooks";
import { useParams } from "react-router";
import { CoinDetailName, CoinStats } from "components";
import { useSelector } from "react-redux";

import "./CoinDetailPage.scss";

function CointDetailPage() {
   const { fetchCoinInfo } = useApi();

   const { id } = useParams();

   const coin = useSelector((state) => state.coinDetailPage);

   React.useEffect(() => {
      fetchCoinInfo(id);
   }, [id]);

   return (
      <section className="coin-detail-page">
         <div className="container">
            <div className="coin-detail-page__coin-info">
               <div className="coin-detail-page__coin-info-top">
                  <div className="coin-detail-page__short-overview">
                     {coin.info && (
                        <>
                           <CoinDetailName />
                           <CoinStats />
                        </>
                     )}
                  </div>
               </div>

               <div className="coin-detail-page__coin-info-bottom"></div>
            </div>
         </div>
      </section>
   );
}

export default CointDetailPage;

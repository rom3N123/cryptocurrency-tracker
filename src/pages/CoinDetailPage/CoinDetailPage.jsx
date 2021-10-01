import React from "react";
import { useApi } from "hooks";
import { useParams } from "react-router";
import { CoinDetailName, CoinItemProfit, CoinStats } from "components";
import { useSelector } from "react-redux";

import "./CoinDetailPage.scss";

function CointDetailPage() {
   const { fetchCoinInfo } = useApi();

   const { id } = useParams();

   const coin = useSelector((state) => state.coinDetailPage);

   React.useEffect(() => {
      fetchCoinInfo(id);
   }, [id]);

   if (!coin.info) {
      return null;
   }

   return (
      <section className="coin-detail-page">
         <div className="container">
            <div className="coin-detail-page__coin-info">
               <div className="coin-detail-page__data-overview">
                  <CoinDetailName />
                  <CoinStats />
               </div>

               <div className="coin-detail-page__price-overview">
                  <h4 className="coin-detail-page__coin-label">
                     {coin.info.name} Price
                     <span className="coin-detail-page__overview-coin-symbol">
                        {` (${coin.info.symbol})`}
                     </span>
                  </h4>

                  <div className="coin-detail-page__price-overview-section">
                     <div className="coin-detail-page__overview-current-price">
                        ${coin.info.market_data.current_price.usd}
                     </div>

                     <CoinItemProfit
                        className="coin-detail-page__overview-profit"
                        value={coin.info.market_data.price_change_24h}
                     />
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
}

export default CointDetailPage;

import React from "react";
import { CoinDetailName, CoinItemProfit, CoinStats } from "components";
import { useSelector } from "react-redux";

import "./CoinDetailPageHeader.scss";

function CoinDetailPageHeader({ className = "" }) {
   const coin = useSelector((state) => state.coinDetailPage);

   return (
      <header className={`coin-detail-page-header ${className}`}>
         <div className="container">
            <div className="coin-detail-page-header__coin-info">
               <div className="coin-detail-page-header__data-overview">
                  <CoinDetailName />
                  <CoinStats />
               </div>

               <div className="coin-detail-page-header__price-overview">
                  <h4 className="coin-detail-page-header__coin-label">
                     {coin.info.name} Price
                     <span className="coin-detail-page-header__overview-coin-symbol">
                        {` (${coin.info.symbol})`}
                     </span>
                  </h4>

                  <div className="coin-detail-page-header__price-overview-section">
                     <div className="coin-detail-page-header__overview-current-price">
                        ${coin.info.market_data.current_price.usd}
                     </div>

                     <CoinItemProfit
                        className="coin-detail-page-header__overview-profit"
                        value={coin.info.market_data.price_change_24h}
                     />
                  </div>
               </div>
            </div>
         </div>
      </header>
   );
}

export default CoinDetailPageHeader;
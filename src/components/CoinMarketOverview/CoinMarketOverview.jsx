import React from "react";
import { CoinItemProfit, StatsBlock } from "components";
import { useSelector } from "react-redux";

import "./CoinMarketOverview.scss";

function CoinMarketOverview({ className = "" }) {
   const coin = useSelector((state) => state.coinDetailPage.info);

   const coinMarketData = coin && coin.market_data;

   return (
      <div className={`coin-market-overview ${className}`}>
         <div className="coin-market-overview__inner">
            <StatsBlock statName="Market cap">
               <div className="coin-market-overview__price">
                  <span>${coinMarketData.market_cap.usd}</span>
                  <CoinItemProfit value={coinMarketData.price_change_24h} />
               </div>
            </StatsBlock>

            <StatsBlock statName="Total volume">
               <div className="coin-market-overview__price">
                  ${coinMarketData.total_volume.usd}
               </div>
            </StatsBlock>

            <StatsBlock statName="Height 24h">
               <div className="coin-market-overview__price">
                  ${coinMarketData.high_24h.usd}
               </div>
            </StatsBlock>

            <StatsBlock statName="Low 24h">
               <div className="coin-market-overview__price">
                  ${coinMarketData.low_24h.usd}
               </div>
            </StatsBlock>
         </div>
      </div>
   );
}

export default CoinMarketOverview;

import React from "react";
import { StatsBlock } from "components";
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
                  ${coinMarketData.market_cap.usd}
               </div>
            </StatsBlock>

            <StatsBlock statName="Market cap">
               <div className="coin-market-overview__price">
                  ${coinMarketData.market_cap.usd}
               </div>
            </StatsBlock>

            <StatsBlock statName="Market cap">
               <div className="coin-market-overview__price">
                  ${coinMarketData.market_cap.usd}
               </div>
            </StatsBlock>

            <StatsBlock statName="Market cap">
               <div className="coin-market-overview__price">
                  ${coinMarketData.market_cap.usd}
               </div>
            </StatsBlock>
         </div>
      </div>
   );
}

export default CoinMarketOverview;

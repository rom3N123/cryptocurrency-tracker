import React from "react";
import { InformationBox } from "components";
import { useSelector } from "react-redux";

import "./CoinStats.scss";

function CoinStats() {
   const coin = useSelector((state) => state.coinDetailPage.info);

   if (!coin) {
      return null;
   }

   return (
      <div className="coin-stats">
         {coin.market_cap_rank && (
            <InformationBox text={`Rank #` + coin.market_cap_rank} />
         )}

         {coin.hashing_algorithm && (
            <InformationBox text={coin.hashing_algorithm} />
         )}

         {!!coin.categories.length && (
            <InformationBox text={coin.categories[0]} />
         )}
      </div>
   );
}

export default CoinStats;

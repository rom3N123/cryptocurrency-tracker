import React from "react";
import { InformationBox } from "components";
import { useSelector } from "react-redux";

import "./CoinDetailName.scss";

function CoinDetailName({ className = "" }) {
   const coin = useSelector((state) => state.coinDetailPage.info);

   if (!coin) {
      return null;
   }

   return (
      <div className={`coin-market-info ${className}`}>
         <img
            src={coin.image.small}
            alt=""
            className="coin-market-info__logo"
         />

         <h2 className="coin-market-info__name">{coin.name}</h2>

         <InformationBox
            text={coin.symbol}
            className="coin-market-info__symbol"
         />
      </div>
   );
}

export default CoinDetailName;

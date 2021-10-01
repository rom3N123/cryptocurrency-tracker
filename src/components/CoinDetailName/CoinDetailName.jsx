import React from "react";
import { InformationBox } from "components";
import { useSelector } from "react-redux";

import "./CoinDetailName.scss";

function CoinDetailName() {
   const coin = useSelector((state) => state.coinDetailPage.info);

   return (
      <div className="coin-market-info">
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
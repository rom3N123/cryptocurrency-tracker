import React from "react";

import "./CoinItemName.scss";

function CoinItemName({ image, name, symbol }) {
   return (
      <div className="coin-item-name">
         <div className="coin-item-name__inner">
            <img
               className="coin-item-name__image"
               src={image}
               alt="See cryptocurrency logo"
            />

            <p className="coin-item-name__name">{name}</p>

            <span className="coin-item-name__symbol">{symbol}</span>
         </div>
      </div>
   );
}

export default CoinItemName;

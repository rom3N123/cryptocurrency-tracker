import React from "react";

import "./CoinItemProfit.scss";

import ArrowDropUp from "@material-ui/icons/ArrowDropUp";
import classNames from "classnames";

function CoinItemProfit({ value }) {
   let fixedValue = value && value.toFixed(2);

   return (
      <p
         className={classNames("coin-item-price", {
            negative: value && value < 0,
            positive: value && value > 0,
         })}
      >
         {value && (
            <ArrowDropUp
               sx={{
                  fontSize: "20px",
                  transform: `${value && value < 0 ? "rotate(180deg)" : ""}`,
                  alignSelf: "flex-end",
               }}
            />
         )}

         <span>{fixedValue ? `${fixedValue} %` : "unknown"}</span>
      </p>
   );
}

export default CoinItemProfit;

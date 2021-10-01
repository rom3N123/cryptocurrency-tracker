import React from "react";

import "./CoinItemPrice.scss";

import ArrowDropUp from "@material-ui/icons/ArrowDropUp";
import classNames from "classnames";

function CoinItemPrice({ value }) {
   const fixedValue = value.toFixed(2);

   const [isValuePositive, setValuePositive] = React.useState(false);

   React.useEffect(() => {
      setValuePositive(value > 0 ? true : false);
   }, [value]);

   return (
      <p
         className={classNames("coin-item-price", {
            negative: !isValuePositive,
         })}
      >
         <ArrowDropUp
            sx={{
               fontSize: "20px",
               transform: `${!isValuePositive ? "rotate(180deg)" : ""}`,
               alignSelf: "flex-end",
            }}
         />

         <span>{fixedValue} %</span>
      </p>
   );
}

export default CoinItemPrice;

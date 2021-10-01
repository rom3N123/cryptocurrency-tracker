import React from "react";
import { useApi } from "hooks";

import "./CoinsList.scss";

function CoinsList() {
   const { fetchCoins } = useApi();

   const coins = [
      {
         name: "Bitcoin",
         price: "100000 USD",
         "24h%": { value: "10%", className: "percentage-profit" },
         "7d%": { value: "2000%", className: "percentage-profit" },
      },
   ];

   return (
      <div className="container">
         <table className="coins-table">
            <tr className="coins-table__title-row">
               <th className="align-left">
                  <span className="coins-table__title">Name</span>
               </th>
               <th>
                  <span className="coins-table__title">Price</span>
               </th>
               <th>
                  <span className="coins-table__title">24h %</span>
               </th>
               <th>
                  <span className="coins-table__title">7d %</span>
               </th>
            </tr>

            {coins.map((coin) => (
               <tr className="coins-table__coin-item">
                  {Object.entries(coin).map(([key, value]) => (
                     <td className={coin[key]?.className || key} key={key}>
                        {coin[key]?.value || value}
                     </td>
                  ))}
               </tr>
            ))}
         </table>
      </div>
   );
}

export default CoinsList;

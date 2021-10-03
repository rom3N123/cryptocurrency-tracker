import React from "react";
import { useApi, useCoinItem, useQuery } from "hooks";
import { useSelector } from "react-redux";
import { CoinItemName, CoinItemProfit, SkeletonCoinsList } from "components";

import "./CoinsList.scss";

function CoinsList() {
   const query = useQuery();

   const { fetchCoins, fetchCoinsList } = useApi();

   const { handleCoinItemClick } = useCoinItem();

   const state = useSelector((state) => state);

   React.useEffect(() => {
      const fetchCoinsListFromApi = async () => await fetchCoinsList();

      if (!state.coins.total) {
         fetchCoinsListFromApi();
      }
   }, []);

   React.useEffect(() => {
      const fetchCoinsFromApi = async () => await fetchCoins();

      if (state.searchParams) {
         fetchCoinsFromApi();
      }
   }, [state.searchParams, query.get("page")]);

   return (
      <div className="container">
         <table className="coins-table">
            <tr className="coins-table__title-row">
               <th className="market-place">
                  <span className="coins-table__title">#</span>
               </th>
               <th className="align-left">
                  <span className="coins-table__title">Name</span>
               </th>
               <th>
                  <span className="coins-table__title">Price</span>
               </th>
               <th>
                  <span className="coins-table__title">24h %</span>
               </th>
            </tr>

            {state.fetchStatus.coins ? (
               <SkeletonCoinsList />
            ) : (
               state.coins.items &&
               state.coins.items.map((coin) => (
                  <tr className="coins-table__coin-item">
                     <td className="market-place">{coin.market_cap_rank}</td>

                     <td>
                        <CoinItemName
                           onClick={() => handleCoinItemClick(coin.id)}
                           image={coin.image}
                           name={coin.name}
                           symbol={coin.symbol}
                        />
                     </td>

                     <td className="coins-table__coin-item-price">
                        <span className="coins-table__coin-price">
                           {coin.current_price
                              ? `${coin.current_price} $`
                              : "unknown"}
                        </span>
                     </td>

                     <td className="coins-table__coin-item-percentage">
                        <CoinItemProfit
                           value={coin.price_change_percentage_24h}
                        />
                     </td>
                  </tr>
               ))
            )}
         </table>
      </div>
   );
}

export default CoinsList;

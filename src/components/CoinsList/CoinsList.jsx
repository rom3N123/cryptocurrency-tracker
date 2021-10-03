import React from "react";
import { useApi, useCoinItem, useFilter, useQuery } from "hooks";
import { useSelector } from "react-redux";
import { CoinItemName, CoinItemProfit, SkeletonCoinsList } from "components";

import "./CoinsList.scss";

function CoinsList() {
   const query = useQuery();
   const { setFilter } = useFilter();

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

   const tableMainCells = [
      {
         name: "#",
         filterName: "marketData",
         className: "market-place",
      },
      {
         name: "Name",
         filterName: "name",
         className: "align-left",
      },
      {
         name: "Price",
         filterName: "price",
      },
      {
         name: "24h %",
         filterName: "profit",
      },
   ];

   return (
      <div className="container">
         <table className="coins-table">
            <tr className="coins-table__title-row">
               {tableMainCells.map((cell) => (
                  <th
                     onClick={() => setFilter(cell.filterName)}
                     key={cell.name}
                     className={`coins-table__title ${cell.className ?? ""}`}
                  >
                     {cell.name}
                  </th>
               ))}
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

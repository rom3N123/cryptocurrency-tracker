import React from "react";
import { useApi, useCoinItem, useFilter, useQuery } from "hooks";
import { useSelector } from "react-redux";
import { CoinItemName, CoinItemProfit, SkeletonCoinsList } from "components";

import ArrowDropUp from "@material-ui/icons/ArrowDropUp";

import "./CoinsList.scss";

function CoinsList() {
   const query = useQuery();
   const { setFilter } = useFilter();

   const { fetchCoins, fetchCoinsList } = useApi();

   const { handleCoinItemClick } = useCoinItem();

   const state = useSelector((state) => state);

   const coins = useSelector(
      (state) => state.coins.sorted ?? state.coins.items
   );

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
         filterName: "market_cap_rank",
         className: "market-place",
      },
      {
         name: "Name",
         filterName: "name",
         className: "align-left",
      },
      {
         name: "Price",
         filterName: "current_price",
      },
      {
         name: "24h %",
         filterName: "market_cap_change_percentage_24h",
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
                     className={`coins-table__main ${cell.className ?? ""}`}
                  >
                     <span className="coins-table__main-name">
                        {state.sort[cell.filterName] && (
                           <ArrowDropUp
                              sx={{
                                 position: "absolute",
                                 bottom: "-5px",
                                 left: "-12px",
                                 fontSize: "22px",
                                 transform: `${
                                    state.sort[cell.filterName] === "asc" &&
                                    "rotate(180deg)"
                                 }`,
                              }}
                           />
                        )}

                        {cell.name}
                     </span>
                  </th>
               ))}
            </tr>

            {state.fetchStatus.coins || !state.coins.items ? (
               <SkeletonCoinsList />
            ) : (
               coins.map((coin) => (
                  <tr key={coin.id} className="coins-table__coin-item">
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

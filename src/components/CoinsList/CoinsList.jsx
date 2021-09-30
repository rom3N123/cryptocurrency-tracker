import React from "react";
import { useApi } from "hooks";

import "./CoinsList.scss";

function CoinsList() {
   const { fetchCoins } = useApi();

   return (
      <ul className="coin-list">
         <button style={{ color: "#fff" }} onClick={fetchCoins}>
            FETCH COINS
         </button>
      </ul>
   );
}

export default CoinsList;

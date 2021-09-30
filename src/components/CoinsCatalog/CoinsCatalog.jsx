import React from "react";
import { CoinsList, SearchParams } from "components";

import "./CoinsCatalog.scss";

function CoinsCatalog() {
   return (
      <div className="coins-catalog">
         <SearchParams />

         <CoinsList />
      </div>
   );
}

export default CoinsCatalog;

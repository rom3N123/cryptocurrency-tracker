import React from "react";
import { CoinsList, Pagination } from "components";

import "./CoinsCatalog.scss";
import { Fade } from "@material-ui/core";

function CoinsCatalog() {
   return (
      <Fade in={true}>
         <div className="coins-catalog">
            <CoinsList />

            <div className="coins-catalog__pagination-wrapper">
               <div className="container">
                  <Pagination />
               </div>
            </div>
         </div>
      </Fade>
   );
}

export default CoinsCatalog;

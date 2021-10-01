import React from "react";

import "./SearchParams.scss";
import { useSelector } from "react-redux";
import { FiltersButton, SelectRows } from "components";

function SearchParams() {
   const searchParamsState = useSelector((state) => state.searchParams);

   const rowsOptions = [searchParamsState.paginationSize, 20, 30, 40, 50];

   return (
      <form className="search-params">
         <div className="container">
            <div className="search-params__options-row">
               <SelectRows
                  options={rowsOptions}
                  defaultValue={rowsOptions[0]}
               />

               <FiltersButton />
            </div>
         </div>
      </form>
   );
}

export default SearchParams;

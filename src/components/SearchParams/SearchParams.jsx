import React from "react";

import "./SearchParams.scss";
import { useSelector } from "react-redux";
import { SelectRows } from "components";

function SearchParams() {
   const searchParamsState = useSelector((state) => state.searchParams);

   const rowsOptions = [searchParamsState.paginationSize, 20, 30, 40, 50];

   return (
      <form className="search-params">
         <SelectRows options={rowsOptions} defaultValue={rowsOptions[0]} />
      </form>
   );
}

export default SearchParams;

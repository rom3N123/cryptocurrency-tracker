import React from "react";
import { Input, SearchButton } from "components";

import "./Searchbar.scss";

function Searchbar() {
   const [searchbarState, setSearchbarState] = React.useState({
      searchValue: "",
   });

   const handleSearch = () => {
      alert("hi");
   };

   const handleValueChange = (e) => {
      setSearchbarState((prev) => ({ ...prev, searchValue: e.target.value }));
   };

   return (
      <form onSubmit={handleSearch} className="searchbar">
         <div className="searchbar__input-wrapper">
            <Input
               onChange={handleValueChange}
               placeholder="Search.."
               value={searchbarState.searchValue}
            />

            <div className="searchbar__button-wrapper">
               <SearchButton type="submit" />
            </div>
         </div>
      </form>
   );
}

export default Searchbar;

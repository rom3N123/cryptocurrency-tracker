import { IconButton, Input } from "components";
import React from "react";
import "./Searchbar.scss";

import { ReactComponent as SearchSvgIcon } from "../../assets/images/search-icon.svg";

function Searchbar() {
   const [searchbarState, setSearchbarState] = React.useState({
      searchValue: "",
   });

   const handleValueChange = (e) => {
      setSearchbarState((prev) => ({ ...prev, searchValue: e.target.value }));
   };

   return (
      <form className="searchbar">
         <div className="searchbar__input-wrapper">
            <Input
               onChange={handleValueChange}
               placeholder="Search.."
               value={searchbarState.searchValue}
            />

            <IconButton>
               <SearchSvgIcon />
            </IconButton>
         </div>
      </form>
   );
}

export default Searchbar;

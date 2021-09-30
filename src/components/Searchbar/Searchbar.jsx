import { Input } from "components";
import React from "react";
import "./Searchbar.scss";

function Searchbar() {
   const [searchbarState, setSearchbarState] = React.useState({
      searchValue: "",
   });

   const handleValueChange = (e) => {
      setSearchbarState((prev) => ({ ...prev, searchValue: e.target.value }));
   };

   return (
      <form className="searchbar">
         <Input
            onChange={handleValueChange}
            placeholder="Search.."
            value={searchbarState.searchValue}
         />
      </form>
   );
}

export default Searchbar;

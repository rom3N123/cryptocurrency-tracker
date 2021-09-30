import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import { IconButton } from "@material-ui/core";

function SearchButton({ ...props }) {
   return (
      <IconButton {...props}>
         <SearchIcon />
      </IconButton>
   );
}

export default SearchButton;

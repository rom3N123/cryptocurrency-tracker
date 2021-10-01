import React from "react";
import { Button } from "@material-ui/core";

import FilterListIcon from "@material-ui/icons/FilterList";

function FiltersButton() {
   return <Button startIcon={<FilterListIcon />}>Filter</Button>;
}

export default FiltersButton;

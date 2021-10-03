import React from "react";
import { ToggleButton, ToggleButtonGroup } from "@material-ui/core";

import "./ChartFilters.scss";

function ChartFilters() {
   const filters = [
      {
         name: "Price",
      },
   ];

   return (
      <div className="chart-filters">
         <ToggleButtonGroup></ToggleButtonGroup>
      </div>
   );
}

export default ChartFilters;

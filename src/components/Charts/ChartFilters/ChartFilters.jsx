import React from "react";
import { ToggleButton, ToggleButtonGroup } from "@material-ui/core";

import "./ChartFilters.scss";

function ChartFilters() {
   const typeFilters = [
      {
         name: "Price",
         value: "prices",
      },
      {
         name: "Market cap",
         value: "market_caps",
      },
      {
         name: "Total volumes",
         value: "total_volumes",
      },
   ];

   const periodFilters = [
      {
         name: "1D",
         value: "1",
      },
      {
         name: "7D",
         value: "7",
      },
      {
         name: "1M",
         value: "30",
      },
      {
         name: "2M",
         value: "60",
      },
      {
         name: "3M",
         value: "90",
      },
   ];

   return (
      <div className="chart-filters">
         <ToggleButtonGroup>
            {typeFilters.map((filter) => (
               <ToggleButton value={filter.value} key={filter.name}>
                  {filter.name}
               </ToggleButton>
            ))}
         </ToggleButtonGroup>

         <ToggleButtonGroup>
            {periodFilters.map((filter) => (
               <ToggleButton value={filter.value} key={filter.name}>
                  {filter.name}
               </ToggleButton>
            ))}
         </ToggleButtonGroup>
      </div>
   );
}

export default ChartFilters;

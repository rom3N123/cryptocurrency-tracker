import React from "react";
import { ToggleButton, ToggleButtonGroup } from "@material-ui/core";
import { useChart, useSearchParams } from "hooks";
import { useSelector } from "react-redux";
import "./ChartFilters.scss";

function ChartFilters() {
   const state = useSelector((state) => state);

   const { setChartValue } = useChart();
   const { setChartPeriod } = useSearchParams();

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
         <ToggleButtonGroup value={state.chart.value}>
            {typeFilters.map((filter) => (
               <ToggleButton
                  onClick={() => setChartValue(filter.value)}
                  value={filter.value}
                  key={filter.name}
               >
                  {filter.name}
               </ToggleButton>
            ))}
         </ToggleButtonGroup>

         <ToggleButtonGroup value={state.searchParams.chart.days}>
            {periodFilters.map((filter) => (
               <ToggleButton
                  onClick={() => setChartPeriod(filter.value)}
                  value={filter.value}
                  key={filter.name}
               >
                  {filter.name}
               </ToggleButton>
            ))}
         </ToggleButtonGroup>
      </div>
   );
}

export default ChartFilters;

import React from "react";
import { getDateFromTimestamp } from "helpers";
import { Line } from "react-chartjs-2";
import { useSelector } from "react-redux";
import { useChart } from "hooks";

import "./CoinChart.scss";

function CoinChart() {
   const { getData, getOptions } = useChart();

   const state = useSelector((state) => state);

   const data = getData(
      state.coinDetailPage.marketData[state.chart.value].map((el) =>
         getDateFromTimestamp(el[0])
      ),
      [state.coinDetailPage.marketData[state.chart.value].map((el) => el[1])]
   );

   const options = getOptions();

   return (
      <div className="coin-price-chart">
         <Line
            className="coin-price-chart__item"
            options={options}
            data={data}
         />
      </div>
   );
}

export default CoinChart;

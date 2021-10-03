import React from "react";
import { getDateFromTimestamp } from "helpers";
import { Line } from "react-chartjs-2";
import { useSelector } from "react-redux";
import { useChart } from "hooks";

import "./CoinChart.scss";

function CoinChart() {
   const { getData, getOptions } = useChart();
   const coinMarketData = useSelector(
      (state) => state.coinDetailPage.marketData
   );

   const data = getData(
      coinMarketData.prices.map((el) => getDateFromTimestamp(el[0])),
      [coinMarketData.prices.map((el) => el[1])]
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

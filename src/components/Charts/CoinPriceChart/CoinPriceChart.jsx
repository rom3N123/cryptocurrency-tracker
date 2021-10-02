import { getDateFromTimestamp } from "helpers";
import React from "react";
import { Line } from "react-chartjs-2";
import { useSelector } from "react-redux";

import "./CoinPriceChart.scss";

function CoinPriceChart() {
   const coinMarketData = useSelector(
      (state) => state.coinDetailPage.marketData
   );

   const data = {
      labels: [
         ...coinMarketData.prices.map((el) => getDateFromTimestamp(el[0])),
      ],
      datasets: [
         {
            label: "Price",
            fill: true,
            data: [...coinMarketData.prices.map((el) => el[1])],
            backgroundColor: "rgba(66, 165, 245, .4)",
            borderColor: "#1976d2",
            borderWidth: 2,
            pointBorderColor: "#fff",
            pointBackgroundColor: "#1976d2",
            pointHoverRadius: 7,
            pointRadius: 3,
         },
      ],
   };

   const options = {
      plugins: {
         legend: {
            display: false,
         },
      },
      scales: {
         x: {
            ticks: {
               display: false,
            },
         },
      },
   };

   return (
      <div className="coin-price-chart">
         <Line options={options} data={data} />
      </div>
   );
}

export default CoinPriceChart;

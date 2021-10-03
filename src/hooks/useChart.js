import { defaultOptions, defaultDatasetsStyles } from "charts";

const useChart = () => {
   const getData = (labels, datasets) => ({
      labels,
      datasets: datasets.map((data) => ({
         ...defaultDatasetsStyles,
         data,
      })),
   });

   const getOptions = () => defaultOptions;

   return { getOptions, getData };
};

export default useChart;

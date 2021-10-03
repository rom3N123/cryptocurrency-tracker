import { defaultOptions, defaultDatasets } from "charts";

const useChart = () => {
   const getData = (labels, data) => ({
      labels,
      defaultDatasets: {
         ...defaultDatasets,
         data,
      },
   });

   const getOptions = () => defaultOptions;

   return { getOptions, getData };
};

export default useChart;

import { defaultOptions, defaultDatasetsStyles } from "charts";
import { useDispatch } from "react-redux";
import { SET_VALUE } from "redux/slices/chart";

const useChart = () => {
   const dispatch = useDispatch();

   const getData = (labels, datasets) => ({
      labels,
      datasets: datasets.map((data) => ({
         ...defaultDatasetsStyles,
         data,
      })),
   });

   const getOptions = () => defaultOptions;

   const setChartValue = (value) => dispatch(SET_VALUE(value));

   return { getOptions, getData, setChartValue };
};

export default useChart;

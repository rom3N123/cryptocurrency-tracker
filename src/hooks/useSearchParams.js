import { useDispatch } from "react-redux";
import {
   SET_CATEGORY,
   SET_CHART_PERIOD,
   SET_CHART_TYPE,
   SET_CURRENCY,
   SET_ORDER,
   SET_PAGINATION_SIZE,
} from "redux/slices/searchParams";

const useSearchParams = () => {
   const dispatch = useDispatch();

   const setCurrency = (currency) => dispatch(SET_CURRENCY(currency));

   const setPaginationSize = (size) => dispatch(SET_PAGINATION_SIZE(size));

   const setOrder = (order) => dispatch(SET_ORDER(order));

   const setCategory = (category) => dispatch(SET_CATEGORY(category));

   const setChartPeriod = (period) => dispatch(SET_CHART_PERIOD(period));

   const setChartType = (type) => dispatch(SET_CHART_TYPE(type));

   return {
      setCurrency,
      setPaginationSize,
      setOrder,
      setCategory,
      setChartPeriod,
      setChartType,
   };
};

export default useSearchParams;

import { useDispatch } from "react-redux";
import {
   SET_CATEGORY,
   SET_CURRENCY,
   SET_ORDER,
   SET_PAGINATION_SIZE,
   SET_PAGE,
} from "redux/slices/searchParams";

const useSearchParams = () => {
   const dispatch = useDispatch();

   const setCurrency = (currency) => dispatch(SET_CURRENCY(currency));

   const setPage = (page) => dispatch(SET_PAGE(page));

   const setPaginationSize = (size) => dispatch(SET_PAGINATION_SIZE(size));

   const setOrder = (order) => dispatch(SET_ORDER(order));

   const setCategory = (category) => dispatch(SET_CATEGORY(category));

   return {
      setCurrency,
      setPaginationSize,
      setOrder,
      setCategory,
      setPage,
   };
};

export default useSearchParams;

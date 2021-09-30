import { useDispatch } from "react-redux";
import { SET_PAGINATION_SIZE } from "redux/slices/pagination";

const usePagination = () => {
   const dispatch = useDispatch();

   const changePaginationSize = (amount) =>
      dispatch(SET_PAGINATION_SIZE(amount));

   return { changePaginationSize };
};

export default usePagination;

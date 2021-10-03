import { useDispatch } from "react-redux";
import { SET_FILTER } from "redux/slices/filter";

const useFilter = () => {
   const dispatch = useDispatch();

   const setFilter = (filterName) => {
      dispatch(SET_FILTER(filterName));
   };

   return {
      setFilter,
   };
};

export default useFilter;

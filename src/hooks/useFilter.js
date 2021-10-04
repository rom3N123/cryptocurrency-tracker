import { useDispatch, useSelector } from "react-redux";
import { SORT_COINS } from "redux/slices/coins";
import { SET_FILTER } from "redux/slices/sort";

const useFilter = () => {
   const state = useSelector((state) => state);

   const dispatch = useDispatch();

   const setFilter = (filterName) => {
      dispatch(SET_FILTER(filterName));
      alert(state.sort[filterName]);
      dispatch(
         SORT_COINS({
            filterName,
            sort: state.sort[filterName],
         })
      );
   };

   return {
      setFilter,
   };
};

export default useFilter;

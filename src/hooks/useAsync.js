import { useDispatch } from "react-redux";
import { SET_FETCH, UNSET_FETCH } from "redux/slices/fetchStatus";

const useAsync = (cbfunc, fetchStatusName) => {
   const dispatch = useDispatch();

   return async (...rest) => {
      dispatch(SET_FETCH(fetchStatusName));

      const result = await cbfunc(...rest);

      dispatch(UNSET_FETCH(fetchStatusName));

      return result;
   };
};

export default useAsync;

import { useDispatch } from "react-redux";
import { CHANGE_FETCH_STATUS } from "redux/slices/fetchStatus";

const useAsync = (cbfunc, fetchStatusName) => {
   const dispatch = useDispatch();

   return async (...rest) => {
      console.log(rest);
      dispatch(CHANGE_FETCH_STATUS(fetchStatusName));

      const result = await cbfunc(...rest);

      dispatch(CHANGE_FETCH_STATUS(fetchStatusName));

      return result;
   };
};

export default useAsync;

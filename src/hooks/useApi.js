import $api from "http/axios";
import { useAsync } from "hooks";
import { useDispatch, useSelector } from "react-redux";
import { SET_COINS } from "redux/slices/coins";

const useApi = () => {
   const dispatch = useDispatch();

   const searchParams = useSelector((state) => state.searchParams);

   const buildGetParams = () => {
      let params = [];

      for (let [key, value] of Object.entries(searchParams)) {
         if (value) {
            params.push(`${key}=${value}`);
         }
      }

      return params.join("&");
   };

   const fetchCoins = useAsync(async () => {
      const getParams = buildGetParams();

      const response = await $api.get("coins/markets?" + getParams);

      dispatch(SET_COINS(response.data));
   }, "coins");

   return { fetchCoins };
};

export default useApi;

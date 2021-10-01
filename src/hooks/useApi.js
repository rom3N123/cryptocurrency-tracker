import $api from "http/axios";
import { useAsync } from "hooks";
import { useDispatch } from "react-redux";
import { SET_COINS } from "redux/slices/coins";

const useApi = () => {
   const dispatch = useDispatch();

   const fetchCoins = useAsync(async () => {
      const response = await $api.get("coins/markets?vs_currency=usd");

      dispatch(SET_COINS(response.data));
   }, "coins");

   return { fetchCoins };
};

export default useApi;

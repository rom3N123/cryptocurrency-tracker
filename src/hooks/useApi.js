import $api from "http/axios";
import { useAsync, useQuery } from "hooks";
import { useDispatch, useSelector } from "react-redux";
import { SET_COINS, SET_TOTAL } from "redux/slices/coins";
import { SET_COIN_INFO } from "redux/slices/coinDetailPage";

const useApi = () => {
   let query = useQuery();

   const dispatch = useDispatch();

   const searchParams = useSelector((state) => state.searchParams);

   const buildGetParams = () => {
      let params = [];

      for (let [key, value] of Object.entries(searchParams)) {
         if (value) {
            params.push(key + "=" + value);
         }
      }

      let page = query.get("page");

      if (page) {
         params.push("page=" + page);
      }

      return params.join("&");
   };

   const fetchCoins = useAsync(async () => {
      let getParams = buildGetParams();

      const response = await $api.get("coins/markets?" + getParams);

      dispatch(SET_COINS(response.data));
   }, "coins");

   const fetchCoinsList = async () => {
      const response = await $api.get("coins/list");

      dispatch(SET_TOTAL(response.data.length));
   };

   const fetchCoinInfo = useAsync(async (id) => {
      alert(id);
      // const response = await $api.get("coins/" + id);

      // dispatch(SET_COIN_INFO(response.data));
   }, "coinInfo");

   return { fetchCoins, fetchCoinsList, fetchCoinInfo };
};

export default useApi;

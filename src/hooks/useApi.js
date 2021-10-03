import $api from "http/axios";
import { useAsync, useQuery } from "hooks";
import { useDispatch, useSelector } from "react-redux";
import { SET_COINS, SET_TOTAL } from "redux/slices/coins";
import {
   SET_COIN_INFO,
   SET_COIN_MARKET_DATA,
} from "redux/slices/coinDetailPage";

const useApi = () => {
   let query = useQuery();

   const dispatch = useDispatch();

   const searchParams = useSelector((state) => state.searchParams);

   const fetchCoins = useAsync(async () => {
      const response = await $api.get("coins/markets", {
         params: {
            ...searchParams.coinsList,
            ...searchParams.general,
            page: query.get("page"),
         },
      });

      dispatch(SET_COINS(response.data));
   }, "coins");

   const fetchCoinsList = async () => {
      const response = await $api.get("coins/list");

      dispatch(SET_TOTAL(response.data.length));
   };

   const fetchCoinInfo = useAsync(async (id) => {
      const response = await $api.get("coins/" + id);

      dispatch(SET_COIN_INFO(response.data));
   }, "coinInfo");

   const fetchCoinMarketData = useAsync(async (id) => {
      const response = await $api.get("coins/" + id + "/market_chart", {
         params: {
            ...searchParams.chart,
            ...searchParams.general,
         },
      });

      dispatch(SET_COIN_MARKET_DATA(response.data));
   }, "coinInfo");

   return { fetchCoins, fetchCoinsList, fetchCoinInfo, fetchCoinMarketData };
};

export default useApi;

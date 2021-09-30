import $api from "http/axios";
import { useAsync } from "hooks";

const useApi = () => {
   const fetchCoins = useAsync(async () => {
      const response = await $api.get("search/trending");

      return response.data;
   }, "coins");

   return { fetchCoins };
};

export default useApi;

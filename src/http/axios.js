import axios from "axios";

const API_KEY = "5ddaf7d2-6236-4c37-af46-47b9c59865b4";

const $api = axios.create({
   baseURL: "https://pro-api.coinmarketcap.com/v1/",
});

$api.interceptors.request.use((config) => {
   config.headers = { ...config.headers, "X-CMC_PRO_API_KEY": API_KEY };

   return config;
});

export default $api;

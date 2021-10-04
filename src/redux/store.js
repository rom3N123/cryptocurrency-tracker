import { configureStore } from "@reduxjs/toolkit";

import {
   coins,
   fetchStatus,
   searchParams,
   coinDetailPage,
   chart,
   sort,
} from "./slices";

const store = configureStore({
   reducer: { coins, fetchStatus, searchParams, coinDetailPage, chart, sort },
});

export default store;

import { configureStore } from "@reduxjs/toolkit";

import {
   coins,
   fetchStatus,
   searchParams,
   coinDetailPage,
   chart,
   filter,
} from "./slices";

const store = configureStore({
   reducer: { coins, fetchStatus, searchParams, coinDetailPage, chart, filter },
});

export default store;

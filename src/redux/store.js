import { configureStore } from "@reduxjs/toolkit";

import {
   coins,
   fetchStatus,
   searchParams,
   coinDetailPage,
   chart,
} from "./slices";

const store = configureStore({
   reducer: { coins, fetchStatus, searchParams, coinDetailPage, chart },
});

export default store;

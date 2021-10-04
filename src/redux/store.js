import { configureStore } from "@reduxjs/toolkit";

import {
   coins,
   fetchStatus,
   searchParams,
   coinDetailPage,
   chart,
   sort,
} from "./slices";

import thunk from "redux-thunk";

const store = configureStore({
   reducer: { coins, fetchStatus, searchParams, coinDetailPage, chart, sort },
   middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

export default store;

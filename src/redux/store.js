import { configureStore } from "@reduxjs/toolkit";

import { coins, fetchStatus, searchParams, coinDetailPage } from "./slices";

const store = configureStore({
   reducer: { coins, fetchStatus, searchParams, coinDetailPage },
});

export default store;

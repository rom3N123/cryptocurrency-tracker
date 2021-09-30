import { configureStore } from "@reduxjs/toolkit";

import { coins, fetchStatus, searchParams } from "./slices";

const store = configureStore({
   reducer: { coins, fetchStatus, searchParams },
});

export default store;

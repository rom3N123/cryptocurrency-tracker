import { configureStore } from "@reduxjs/toolkit";

import { coins, fetchStatus, pagination } from "./slices";

const store = configureStore({
   reducer: { coins, fetchStatus, pagination },
});

export default store;

import { configureStore } from "@reduxjs/toolkit";

import { coins, fetchStatus } from "./slices";

const store = configureStore({
   reducer: { coins, fetchStatus },
});

export default store;

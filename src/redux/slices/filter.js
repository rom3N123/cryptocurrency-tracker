import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   market_cap_rank: "desc",
   name: null,
   current_price: null,
   high_24h: null,
};

const clearedFilters = {
   market_cap_rank: null,
   name: null,
   current_price: null,
   high_24h: null,
};

const filterSlice = createSlice({
   name: "COINS_LIST_FILTER",
   initialState,
   reducers: {
      SET_FILTER: (state, action) => ({
         ...clearedFilters,
         [action.payload]: !state[action.payload]
            ? "desc"
            : state[action.payload] === "desc"
            ? "asc"
            : "desc",
      }),
   },
});

export const { SET_FILTER } = filterSlice.actions;

export default filterSlice.reducer;

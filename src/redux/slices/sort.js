import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   market_cap_rank: "desc",
   name: null,
   current_price: null,
   market_cap_change_percentage_24h: null,
};

const clearedFilters = {
   market_cap_rank: null,
   name: null,
   current_price: null,
   market_cap_change_percentage_24h: null,
};

const sortSlice = createSlice({
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

export const { SET_FILTER } = sortSlice.actions;

export default sortSlice.reducer;

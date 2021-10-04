import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   market_cap_rank: { value: "desc", type: "number" },
   name: { value: null, type: "string" },
   current_price: { value: null, type: "number" },
   high_24h: { value: null, type: "number" },
};

const clearedFilters = {
   market_cap_rank: { value: null, type: "number" },
   name: { value: null, type: "string" },
   current_price: { value: null, type: "number" },
   high_24h: { value: null, type: "number" },
};

const filterSlice = createSlice({
   name: "COINS_LIST_FILTER",
   initialState,
   reducers: {
      SET_FILTER: (state, action) => ({
         ...clearedFilters,
         [action.payload]: {
            ...state[action.payload],
            value: !state[action.payload].value
               ? "desc"
               : state[action.payload].value === "desc"
               ? "asc"
               : "desc",
         },
      }),
   },
});

export const { SET_FILTER } = filterSlice.actions;

export default filterSlice.reducer;

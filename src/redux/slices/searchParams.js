import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   order: "market_cap_desc",
   per_page: 10,
   vs_currency: "usd",
   page: 1,
   category: null,
};

const searchParamsSlice = createSlice({
   name: "SEARCH_PARAMS",
   initialState,
   reducers: {
      SET_CURRENCY: (state, action) => ({
         ...state,
         category: action.payload,
      }),

      SET_PAGINATION_SIZE: (state, action) => ({
         ...state,
         paginationSize: action.payload,
      }),

      SET_ORDER: (state, action) => ({
         ...state,
         order: action.payload,
      }),

      SET_CATEGORY: (state, action) => ({
         ...state,
         category: action.payload,
      }),
   },
});

export const { SET_CATEGORY, SET_CURRENCY, SET_ORDER, SET_PAGINATION_SIZE } =
   searchParamsSlice.actions;

export default searchParamsSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   coinsList: { order: "market_cap_desc", per_page: 10 },
   general: {
      vs_currency: "usd",
   },
   coin: {},
};

const searchParamsSlice = createSlice({
   name: "SEARCH_PARAMS",
   initialState,
   reducers: {
      SET_CURRENCY: (state, action) => ({
         ...state,
         general: {
            ...state.general,
            vs_currency: action.payload,
         },
      }),

      SET_PAGINATION_SIZE: (state, action) => ({
         ...state,
         coinsList: { ...state.coinsList, per_page: action.payload },
      }),

      SET_ORDER: (state, action) => ({
         ...state,
         coinsList: { ...state.coinsList, order: action.payload },
      }),

      SET_CATEGORY: (state, action) => ({
         ...state,
         coinsList: { ...state.coinsList, category: action.payload },
      }),
   },
});

export const { SET_CATEGORY, SET_CURRENCY, SET_ORDER, SET_PAGINATION_SIZE } =
   searchParamsSlice.actions;

export default searchParamsSlice.reducer;

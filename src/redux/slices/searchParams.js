import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   coinsSearch: { order: "market_cap_desc", per_page: 10 },

   general: {
      vs_currency: "usd",
   },

   chart: {
      days: "1",
   },
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
         coinsSearch: { ...state.coinsSearch, per_page: action.payload },
      }),

      SET_ORDER: (state, action) => ({
         ...state,
         coinsSearch: { ...state.coinsSearch, order: action.payload },
      }),

      SET_CATEGORY: (state, action) => ({
         ...state,
         coinsSearch: { ...state.coinsSearch, category: action.payload },
      }),

      SET_CHART_PERIOD: (state, action) => ({
         ...state,
         chart: {
            days: action.payload,
         },
      }),

      SET_CHART_TYPE: (state, action) => ({
         ...state,
         chart: {
            ...state.chart,
            type: action.payload,
         },
      }),
   },
});

export const {
   SET_CATEGORY,
   SET_CHART_TYPE,
   SET_CURRENCY,
   SET_ORDER,
   SET_PAGINATION_SIZE,
   SET_CHART_PERIOD,
} = searchParamsSlice.actions;

export default searchParamsSlice.reducer;

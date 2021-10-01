import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   info: null,
   marketData: null,
};

const coinDetailPageSlice = createSlice({
   name: "COIN_DETAIL_PAGE",
   initialState,
   reducers: {
      SET_INFO: (state, action) => ({
         ...state,
         info: action.payload,
      }),

      SET_MARKET_DATA: (state, action) => ({
         ...state,
         marketData: action.payload,
      }),
   },
});

export const { SET_INFO, SET_MARKET_DATA } = coinDetailPageSlice.actions;

export default coinDetailPageSlice.reducer;

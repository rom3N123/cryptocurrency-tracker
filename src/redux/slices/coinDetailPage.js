import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   info: null,
   marketData: null,
};

const coinDetailPageSlice = createSlice({
   name: "COIN_DETAIL_PAGE",
   initialState,
   reducers: {
      SET_COIN_INFO: (state, action) => ({
         ...state,
         info: action.payload,
      }),

      SET_COIN_MARKET_DATA: (state, action) => ({
         ...state,
         marketData: action.payload,
      }),

      DELETE_COIN: () => initialState,
   },
});

export const { SET_COIN_INFO, SET_COIN_MARKET_DATA, DELETE_COIN } =
   coinDetailPageSlice.actions;

export default coinDetailPageSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   coins: false,
   coinMarketData: true,
   coinInfo: true,
};

const fetchStatusSlice = createSlice({
   name: "FETCH_STATUS",
   initialState,
   reducers: {
      CHANGE_FETCH_STATUS: (state, action) => ({
         ...state,
         [action.payload]: !state[action.payload],
      }),
   },
});

export const { CHANGE_FETCH_STATUS } = fetchStatusSlice.actions;

export default fetchStatusSlice.reducer;

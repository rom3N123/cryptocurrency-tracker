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
      SET_FETCH: (state, action) => ({
         ...state,
         [action.payload]: true,
      }),

      UNSET_FETCH: (state, action) => ({
         ...state,
         [action.payload]: false,
      }),
   },
});

export const { SET_FETCH, UNSET_FETCH } = fetchStatusSlice.actions;

export default fetchStatusSlice.reducer;

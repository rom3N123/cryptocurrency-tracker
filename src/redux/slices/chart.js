import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   type: "price",
   period: "1 day",
};

const chartSlice = createSlice({
   name: "CHART",
   initialState,
   reducers: {
      SET_TYPE: (state, action) => ({
         ...state,
         type: action.payload,
      }),

      SET_PERIOD: (state, action) => ({
         ...state,
         period: action.payload,
      }),
   },
});

export const { SET_TYPE, SET_PERIOD } = chartSlice.actions;

export default chartSlice.reducer;

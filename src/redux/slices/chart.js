import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   value: "prices",
};

const chartSlice = createSlice({
   name: "CHART",
   initialState,
   reducers: {
      SET_VALUE: (state, action) => ({
         ...state,
         value: action.payload,
      }),
   },
});

export const { SET_VALUE } = chartSlice.actions;

export default chartSlice.reducer;

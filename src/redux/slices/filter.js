import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   marketPlace: "desc",
   name: null,
   price: null,
   profit: null,
};

const filterSlice = createSlice({
   name: "COINS_LIST_FILTER",
   initialState,
   reducers: {
      SET_FILTER: (state, action) => ({
         ...state,
         [action.payload]: !state.action.payload
            ? "desc"
            : state.action.payload === "desc"
            ? "asc"
            : "desc",
      }),
   },
});

export const { SET_FILTER } = filterSlice.actions;

export default filterSlice.reducer;

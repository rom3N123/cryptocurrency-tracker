const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
   items: null,
   total: null,
};

const coinsSlice = createSlice({
   name: "COINS",
   initialState,
   reducers: {
      SET_COINS: (state, action) => ({
         ...state,
         items: action.payload,
      }),

      SET_TOTAL: (state, action) => ({
         ...state,
         total: action.payload,
      }),
   },
});

export const { SET_COINS, SET_TOTAL } = coinsSlice.actions;

export default coinsSlice.reducer;

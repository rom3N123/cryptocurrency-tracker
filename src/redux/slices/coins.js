const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
   items: null,
};

const coinsSlice = createSlice({
   name: "COINS",
   initialState,
   reducers: {
      SET_COINS: (state, action) => ({
         ...state,
         items: action.payload,
      }),
   },
});

export const { SET_COINS } = coinsSlice.actions;

export default coinsSlice.reducer;

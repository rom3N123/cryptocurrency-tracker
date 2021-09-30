const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
   coins: null,
};

const coinsSlice = createSlice({
   name: "COINS",
   initialState,
   reducers: {
      SET_COINS: (state, action) => ({
         ...state,
         coins: action.payload,
      }),
   },
});

export const { SET_COINS } = coinsSlice.actions;

export default coinsSlice.reducer;

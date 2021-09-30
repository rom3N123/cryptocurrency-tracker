const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
   size: 30,
};

const paginationSlice = createSlice({
   name: "PAGINATION",
   initialState,
   reducers: {
      SET_PAGINATION_SIZE: (state, action) => ({
         ...state,
         paginationSize: action.payload,
      }),
   },
});

export const { SET_PAGINATION_SIZE } = paginationSlice.actions;

export default paginationSlice.reducer;

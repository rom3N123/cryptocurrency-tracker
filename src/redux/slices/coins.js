import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   items: null,
   total: null,
   sorted: null,
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

      SORT_COINS: (state, action) => {
         const filterName = action.payload.filterName;
         const sortType = action.payload.sort;

         const sorts = {
            market_cap_rank: () =>
               sortType === "asc"
                  ? [...state.items].sort((a, b) => a - b)
                  : [...state.items].sort((a, b) => a - b).reverse(),
            market_cap_change_percentage_24h: () =>
               sortType === "desc"
                  ? [...state.items].sort(
                       (a, b) => a[filterName] - b[filterName]
                    )
                  : [...state.items]
                       .sort((a, b) => a[filterName] - b[filterName])
                       .reverse(),
            current_price: () =>
               sortType === "desc"
                  ? [...state.items].sort(
                       (a, b) => a[filterName] - b[filterName]
                    )
                  : [...state.items]
                       .sort((a, b) => a[filterName] - b[filterName])
                       .reverse(),
            name: () =>
               [...state.items].sort((a, b) =>
                  sortType === "desc"
                     ? b[filterName].localeCompare(a[filterName])
                     : a[filterName].localeCompare(b[filterName])
               ),
         };

         return {
            ...state,
            sorted: sorts[filterName](),
         };
      },
   },
});

export const { SET_COINS, SET_TOTAL, SORT_COINS } = coinsSlice.actions;

export default coinsSlice.reducer;

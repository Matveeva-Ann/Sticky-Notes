import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    colors: [],
    isFavorite: null,
};

const filterDataSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    addFilterParam(_, { payload }) {
      return payload;
    },
    resetColors(state) {
      return {...state, colors: []}
    },
    resetFavorite(state) {
      return {...state, isFavorite: null}
    }
  },
});

export const { addFilterParam, resetColors, resetFavorite } = filterDataSlice.actions;
export const filterDataReducer = filterDataSlice.reducer;

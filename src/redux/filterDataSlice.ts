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
  },
});

export const { addFilterParam } = filterDataSlice.actions;
export const filterDataReducer = filterDataSlice.reducer;

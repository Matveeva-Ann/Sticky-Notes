import { createSlice } from "@reduxjs/toolkit";

const backgroundSlice = createSlice({
  name: "background",
  initialState: '',
  reducers: {
    changeBg(_, action) {       
      console.log(action.payload);
      return action.payload;
    },
  },
});

export const { changeBg } = backgroundSlice.actions;
export const backgroundReducer = backgroundSlice.reducer;
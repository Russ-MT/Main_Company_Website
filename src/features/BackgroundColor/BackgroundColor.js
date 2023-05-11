import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  bgColor: "black",
  currPage: 0,
};

const bgColorSlice = createSlice({
  name: "bgColor",
  initialState,
  reducers: {
    changeBgColor(state, action) {
      state.bgColor = action.payload;
    },
    setCurrPage(state, action) {
      state.currPage = action.payload;
    },
  },
});

export const { changeBgColor, setCurrPage } = bgColorSlice.actions;
export default bgColorSlice.reducer;

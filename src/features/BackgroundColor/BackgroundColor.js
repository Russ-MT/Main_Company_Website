import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  bgColor: "black",
  currPage: "",
};

const bgColorSlice = createSlice({
  name: "bgColor",
  initialState,
  reducers: {
    changeBgColor(state, action) {
      state.bgColor = action.payload;
    },
    getCurrPage(state, action) {
      state.currPage = action.payload;
    },
  },
});

export const { changeBgColor, getCurrPage } = bgColorSlice.actions;
export default bgColorSlice.reducer;

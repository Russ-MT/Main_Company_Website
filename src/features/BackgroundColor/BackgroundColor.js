import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  bgColor: "white",
};

const bgColorSlice = createSlice({
  name: "bgColor",
  initialState,
  reducers: {
    changeBgColor(state, action) {
      if (action.payload) {
        state.bgColor = action.payload;
      } else {
        state.bgColor = "white";
      }
    },
  },
});

export const { changeBgColor } = bgColorSlice.actions;
export default bgColorSlice.reducer;

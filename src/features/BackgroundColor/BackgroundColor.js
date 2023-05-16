import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  bgColor: "white",
};

const bgColorSlice = createSlice({
  name: "bgColor",
  initialState,
  reducers: {
    changeBgColor(state, action) {
      state.bgColor = action.payload;
    },
  },
});

export const { changeBgColor } = bgColorSlice.actions;
export default bgColorSlice.reducer;

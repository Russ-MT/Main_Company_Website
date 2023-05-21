import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  bgColor: "white",
  id: "",
  isClicked: false,
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

    triggerDetails(state, action) {
      state.id = action.payload.id;
      state.isClicked = action.payload.click;
    },
  },
});

export const { changeBgColor, triggerDetails } = bgColorSlice.actions;
export default bgColorSlice.reducer;

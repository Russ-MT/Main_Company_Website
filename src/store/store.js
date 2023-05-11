import { configureStore } from "@reduxjs/toolkit";
import bgColorReducer from "../features/BackgroundColor/BackgroundColor";

const store = configureStore({
  reducer: {
    bgColor: bgColorReducer,
  },
});

export default store;

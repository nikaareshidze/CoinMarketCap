import { configureStore } from "@reduxjs/toolkit";
import darkModeSlice from "./darkMode";

const store = configureStore({
  reducer: {
    darkModeSlice: darkModeSlice.reducer,
  },
});

export default store;

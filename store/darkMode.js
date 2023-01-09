import { createSlice } from "@reduxjs/toolkit";

const darkModeInitialState = {
  isDark: false,
};

const darkModeSlice = createSlice({
  name: "darkMode",
  initialState: darkModeInitialState,
  reducers: {
    setIsDark(state) {
      state.isDark = !state.isDark;
    },
  },
});

export const darkModeActions = darkModeSlice.actions;

export default darkModeSlice;

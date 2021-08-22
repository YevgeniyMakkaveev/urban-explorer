import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
  name: "themeSlice",
  initialState: {
    currentTheme: "blue",
  },
  reducers: {
    selectTheme(state, action) {
      const { theme } = action.payload;
      state.currentTheme = theme;
    },
  },
});
export const { selectTheme } = themeSlice.actions;
export default themeSlice.reducer;

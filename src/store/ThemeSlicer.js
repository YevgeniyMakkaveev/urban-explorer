import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
  name: "themeSlice",
  initialState: {
    currentTheme: "blue",
    modalMap: false,
  },
  reducers: {
    selectTheme(state, action) {
      const { theme } = action.payload;
      state.currentTheme = theme;
    },
    openMap(state) {
      const prev = state.modalMap;
      state.modalMap = !prev;
      console.log(state.modalMap);
    },
  },
});
export const { selectTheme, openMap } = themeSlice.actions;
export default themeSlice.reducer;

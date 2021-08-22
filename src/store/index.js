import { configureStore } from "@reduxjs/toolkit";
import searchSlice from "./SearchSlicer";
import themeSlice from "./ThemeSlicer";
import getCity from "./CitySlicer";

export default configureStore({
  reducer: { search: searchSlice, city: getCity, theme: themeSlice },
});

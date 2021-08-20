import { configureStore } from "@reduxjs/toolkit";
import searchSlice from "./SearchSlicer";
import getCity from "./CitySlicer";

export default configureStore({
  reducer: { search: searchSlice, city: getCity },
});

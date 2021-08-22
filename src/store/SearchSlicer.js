import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const _api = `https://api.teleport.org/api/urban_areas/`;

export const fetchSearch = createAsyncThunk(
  "searchSlice/get",
  async function (_, { rejectWithValue, dispatch }) {
    try {
      const response = await axios.get(`${_api}`);
      dispatch(
        getInitList({
          res: response.data._links["ua:item"],
        })
      );
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const searchSlice = createSlice({
  name: "searchSlice",
  initialState: {
    loading: null,
    errorMsg: null,
    initArr: null,
    searchParam: null,
  },
  reducers: {
    getInitList(state, action) {
      const { res } = action.payload;
      state.loading = false;
      state.initArr = res;
    },
    resetSearch(state) {
      state.loading = null;
      state.errorMsg = null;
      state.searchParam = null;
    },
    handleSearch(state, action) {
      const { search } = action.payload;
      state.searchParam = search;
    },
  },
  extraReducers: {
    [fetchSearch.pending]: (state) => {
      state.loading = true;
      state.errorMsg = null;
    },
    [fetchSearch.rejected]: (state, action) => {
      state.loading = false;
      state.errorMsg = action.payload;
    },
  },
});
const { getInitList } = searchSlice.actions;
export const { handleSearch } = searchSlice.actions;
export default searchSlice.reducer;

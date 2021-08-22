import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { fetchSearch } from "./SearchSlicer";

const callApi = async (link) => {
  try {
    const { data } = await axios.get(`${link}`);
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const fetchCity = createAsyncThunk(
  "citySlice/get",
  async function (params, { rejectWithValue, dispatch, getState }) {
    const { city } = getState();

    const { link } = params;
    try {
      const getFirst = await axios.get(`${link}`);
      const init = getFirst.data;
      const scores = await callApi(init._links["ua:scores"].href);
      const details = await callApi(init._links["ua:details"].href);
      const img = await callApi(init._links["ua:images"].href);
      const geo = init.bounding_box.latlon;
      const view = [(geo.south + geo.north) / 2, (geo.east + geo.west) / 2];
      const geoData = {
        name: init.full_name,
        link: init._links.self.href,
        continent: init.continent,
        position: view,
      };
      const finalData = [
        {
          id: init.ua_id,
          mainInfo: geoData,
          scores: scores,
          deatailes: details.categories,
          img: img.photos[0].image,
        },
      ];
      const res = city.city ? city.city.concat(finalData) : finalData;

      dispatch(getData({ res: res, view: view }));
    } catch (error) {
      console.log(error);
      rejectWithValue(error.message);
    }
  }
);

const getCity = createSlice({
  name: "citySlice",
  initialState: {
    errorMsg: null,
    loading: null,
    city: null,
    currentView: null,
  },
  reducers: {
    getData(state, action) {
      const { res, view } = action.payload;
      state.city = res;
      state.currentView = view;
      state.loading = null;
    },
    resetData(state) {
      state.city = null;
      state.loading = null;
      state.errorMsg = null;
    },
    getView(state, action) {
      const view = action.payload;
      state.currentView = view;
    },
  },
  extraReducers: {
    [fetchCity.pending]: (state) => {
      state.loading = true;
      state.errorMsg = false;
    },
    [fetchCity.rejected]: (state, action) => {
      state.loading = false;
      state.errorMsg = action.payload;
    },
  },
});

const { getData } = getCity.actions;
export const { getView } = getCity.actions;
export default getCity.reducer;

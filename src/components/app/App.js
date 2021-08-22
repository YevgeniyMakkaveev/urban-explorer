import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchSearch } from "../../store/SearchSlicer";
import Head from "../head";
import CityCard from "../cityCards";
import Sidebar from "../sidebar";
import LoaderSpinner from "../loader";
import "./App.scss";

function App() {
  const dispatch = useDispatch();
  const { currentTheme } = useSelector((state) => state.theme);
  const { errorMsg } = useSelector((state) => state.search);
  const loadingInit = useSelector((state) => state.search.loading);
  const cityLoad = useSelector((state) => state.city.loading);
  const initSpinner = loadingInit ? (
    <LoaderSpinner text="Loading initial data" />
  ) : null;
  const moreDataSpinner = cityLoad ? (
    <LoaderSpinner text="Loading city data" />
  ) : null;

  useEffect(() => {
    dispatch(fetchSearch());
  }, [dispatch]);

  if (errorMsg) {
    return <h2 className="text__color"> {errorMsg}</h2>;
  }
  return (
    <div className={`App ${currentTheme}`}>
      {initSpinner}
      {moreDataSpinner}
      <Sidebar />
      <div className="main__content">
        <Head />
        <CityCard />
      </div>
    </div>
  );
}

export default App;

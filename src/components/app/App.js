import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchSearch } from "../../store/SearchSlicer";
import Head from "../head";
import CityCard from "../cityCards";
import Sidebar from "../sidebar";
import "./App.scss";

function App() {
  const dispatch = useDispatch();
  const { currentTheme } = useSelector((state) => state.theme);
  useEffect(() => {
    dispatch(fetchSearch());
  }, [dispatch]);
  return (
    <div className={`App ${currentTheme}`}>
      <Sidebar />
      <div className="main__content">
        <Head />
        <CityCard />
      </div>
    </div>
  );
}

export default App;

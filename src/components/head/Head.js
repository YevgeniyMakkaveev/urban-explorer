import { useState } from "react";
import { useDispatch } from "react-redux";
import { Element } from "react-scroll";
import { handleSearch } from "../../store/SearchSlicer";
import { selectTheme } from "../../store/ThemeSlicer";
import ResultList from "./selector";
import "./Head.scss";

const Head = () => {
  const [search, setSearch] = useState("");

  const dispatch = useDispatch();

  const subm = (e) => {
    e.preventDefault();
    setSearch("");
  };
  const onChange = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
    dispatch(handleSearch({ search: search }));
  };
  const changeTheme = (theme) => {
    dispatch(selectTheme({ theme: theme }));
  };

  return (
    <div className="header">
      <div className="app__title bg__head">
        <div className="color__select">
          <p className="text__color">Color theme</p>
          <div
            className="theme__white"
            onClick={() => {
              changeTheme("blue");
            }}
          ></div>
          <div
            className="theme__dark"
            onClick={() => {
              changeTheme("dark");
            }}
          ></div>
        </div>
        <h1 className="title__block title__color">URBAN EXPLORER</h1>
      </div>
      <div className="search__wrapper">
        <Element name="top">
          <p className="title__text text__color">
            Start search and click on the city name to start exploring!
          </p>
        </Element>
        <form onSubmit={subm} className="search__list">
          <input
            className="search__input"
            type="text"
            value={search}
            onChange={onChange}
          />
        </form>
      </div>
      <ResultList submit={setSearch} />
    </div>
  );
};
export default Head;

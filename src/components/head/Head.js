import { useState } from "react";
import { useDispatch } from "react-redux";
import { Element } from "react-scroll";
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
  };
  const changeTheme = (theme) => {
    dispatch(selectTheme({ theme: theme }));
  };

  return (
    <div className="header">
      <div className="app__title bg__head">
        <Element name="top"></Element>
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
        <p className="title__text text__color">
          Start search and click on the city name to start exploring!
        </p>
        <div className="search__list__holder">
          <form onSubmit={subm} className="search__list">
            <input
              className="search__input"
              type="text"
              value={search}
              onChange={onChange}
            />
          </form>
          <ResultList search={search} submit={setSearch} />
        </div>
      </div>
    </div>
  );
};
export default Head;

import { useState } from "react";
import HideItems from "./hideItem";
import { useDispatch } from "react-redux";
import { openMap } from "../../store/ThemeSlicer";

import "./Sidebar.scss";
const Sidebar = () => {
  const [show, setShow] = useState(true);
  const dispatch = useDispatch();

  const sidebarToggle = () => {
    setShow(!show);
  };

  const toggleBigMap = () => {
    dispatch(openMap());
  };

  const showMap = show ? <HideItems /> : null;
  const arrowChoose = show ? "arrow__left" : "arrow__right";

  return (
    <div className={`sidebar ${show ? "push__content" : ""}`}>
      <div className="test">
        <button
          onClick={sidebarToggle}
          className={`sidebar__button button__color ${arrowChoose}`}
        ></button>
        <button
          onClick={toggleBigMap}
          className="big__map__button button__color special__button__text"
        >
          BIG MAP
        </button>
        {showMap}
      </div>
    </div>
  );
};
export default Sidebar;

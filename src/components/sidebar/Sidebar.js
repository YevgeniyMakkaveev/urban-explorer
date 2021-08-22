import { useState } from "react";
import HideItems from "./hideItem";

import "./Sidebar.scss";
const Sidebar = () => {
  const [show, setShow] = useState(true);
  const mapToggle = () => {
    setShow(!show);
  };

  const showMap = show ? <HideItems /> : null;
  const arrowChoose = show ? "arrow__left" : "arrow__right";

  return (
    <div className={`sidebar ${show ? "push__content" : ""}`}>
      <div className="test">
        <button
          onClick={mapToggle}
          className={`sidebar__button button__color ${arrowChoose}`}
        ></button>
        {showMap}
      </div>
    </div>
  );
};
export default Sidebar;

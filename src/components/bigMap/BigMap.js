import MapComponent from "../map";
import { useDispatch } from "react-redux";
import { openMap } from "../../store/ThemeSlicer";
import "./BigMap.scss";

const BigMap = () => {
  const dispatch = useDispatch();
  const toggleBigMap = () => {
    dispatch(openMap());
  };
  return (
    <div className="modal__map__wrapper modal__map__bg">
      <button
        className="map__modal__button button__color special__button__text"
        onClick={toggleBigMap}
      >
        CLOSE MAP
      </button>
      <MapComponent />
    </div>
  );
};

export default BigMap;

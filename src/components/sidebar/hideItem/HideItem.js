import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-scroll";
import MapComponent from "../../map";
import { getView } from "../../../store/CitySlicer";
import "./HideItem.scss";

const HideItems = () => {
  const dispatch = useDispatch();
  const { city } = useSelector((state) => state.city);
  let innerId = 500;
  const refMaker = (arr) => {
    if (arr) {
      return arr.map((el) => (
        <Link
          to={el.id}
          key={innerId++}
          activeClass="active"
          spy={true}
          smooth={true}
        >
          <p
            className="link text__color"
            onClick={() => {
              dispatch(getView(el.mainInfo.position));
            }}
          >
            {el.mainInfo.name}
          </p>
        </Link>
      ));
    }
  };
  return (
    <div>
      <MapComponent />
      <Link
        to="top"
        key={innerId++}
        activeClass="active"
        spy={true}
        smooth={true}
      >
        <p className="link to__top__color">To top</p>
      </Link>
      {refMaker(city)}
    </div>
  );
};
export default HideItems;

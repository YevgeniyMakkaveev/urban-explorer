import { useSelector, useDispatch } from "react-redux";
import { fetchCity } from "../../../store/CitySlicer";
import "./CitySelect.scss";

const ResultList = ({ submit, search }) => {
  const state = useSelector((state) => state.search);
  const { city } = useSelector((state) => state.city);
  const dispatch = useDispatch();
  const { loading, initArr } = state;

  if (!search || loading || search.length < 2) {
    return <div></div>;
  }
  let id = 0;
  const start = (link) => {
    if (!hasAlready(link)) {
      dispatch(fetchCity({ link: link }));
      submit("");
    } else {
      submit("");
    }
  };

  const hasAlready = (link) => {
    if (city) {
      const test = city.filter((el) => {
        return el.mainInfo.link === `${link}`;
      });
      if (test[0]) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  };

  const filtered = initArr
    .filter((items) => {
      return items.name.indexOf(search) > -1;
    })
    .map((items) => (
      <div
        className="reslist__item reslist__e__color"
        key={id++}
        onClick={() => start(items.href)}
      >
        {items.name}
      </div>
    ));

  return <div className="reslist reslist__color">{filtered}</div>;
};
export default ResultList;

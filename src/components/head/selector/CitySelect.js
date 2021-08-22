import { useSelector, useDispatch } from "react-redux";
import { fetchCity } from "../../../store/CitySlicer";
import { handleSearch } from "../../../store/SearchSlicer";
import "./CitySelect.scss";

const ResultList = ({ submit }) => {
  const state = useSelector((state) => state.search);
  const { city } = useSelector((state) => state.city);
  const dispatch = useDispatch();
  const { loading, searchParam, initArr } = state;

  if (!searchParam || loading || searchParam.length < 2) {
    return <div></div>;
  }
  let id = 0;
  const start = (link) => {
    if (!hasAlready(link)) {
      dispatch(fetchCity({ link: link }));
      submit("");
      dispatch(handleSearch({ search: "" }));
    } else {
      submit("");
      dispatch(handleSearch({ search: "" }));
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
      return items.name.indexOf(searchParam) > -1;
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

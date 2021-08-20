import { useSelector, useDispatch } from "react-redux";
import { fetchCity } from "../../store/CitySlicer";

const ResultList = () => {
  const state = useSelector((state) => state.search);
  const dispatch = useDispatch();
  const { loading, searchParam, initArr } = state;

  if (!searchParam || loading) {
    return <div></div>;
  }
  let id = 0;
  const filtered = initArr
    .filter((items) => {
      return items.name.indexOf(searchParam) > -1;
    })
    .map((items) => (
      <div
        key={id++}
        onClick={() => {
          dispatch(fetchCity({ link: items.href }));
        }}
      >
        {items.name}
      </div>
    ));

  return <div className="reslist">{filtered}</div>;
};
export default ResultList;

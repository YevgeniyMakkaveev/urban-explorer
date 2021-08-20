import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchSearch, handleSearch } from "../../store/SearchSlicer";
import ResultList from "../selector";

const Head = () => {
  const [search, setSearch] = useState("");

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchSearch());
  }, [dispatch]);

  const subm = (e) => {
    e.preventDefault();
    dispatch(handleSearch({ search: search }));
    setSearch("");
  };

  return (
    <div>
      <form onSubmit={subm}>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </form>
      <ResultList />
    </div>
  );
};
export default Head;

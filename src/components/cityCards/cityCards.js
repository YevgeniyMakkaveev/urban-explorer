import { useSelector } from "react-redux";
import SingleCard from "./singleCard/";

const CityCard = () => {
  const { city } = useSelector((state) => state.city);
  if (!city) {
    return <></>;
  }
  return city.map((city) => <SingleCard city={city} />);
};
export default CityCard;

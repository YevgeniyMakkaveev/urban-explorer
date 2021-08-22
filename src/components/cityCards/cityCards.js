import { useSelector } from "react-redux";
import SingleCard from "./singleCard/";
import "./cityCards.scss";

const CityCard = () => {
  const { city } = useSelector((state) => state.city);
  let innerId = 1000;
  if (!city) {
    return <></>;
  }
  return (
    <div className="card__wrapper">
      {city.map((city) => (
        <SingleCard key={city.id} city={city} />
      ))}
    </div>
  );
};
export default CityCard;

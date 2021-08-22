import { useSelector } from "react-redux";
import SingleCard from "./singleCard";
import "./Cards.scss";

const CityCard = () => {
  const { city } = useSelector((state) => state.city);
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

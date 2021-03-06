import ScoreMaker from "./scoreMaker";
import InfoMaker from "./infoMaker/InformMaker";
import { useDispatch } from "react-redux";
import { deleteCity } from "../../../store/CitySlicer";
import { Element } from "react-scroll";
import "./SingleCard.scss";

const SingleCard = ({ city }) => {
  const dispath = useDispatch();
  let innerId = 1500;
  const { scores, mainInfo, deatailes, img } = city;
  const backImg = img ? img.mobile : null;
  const summText = scores.summary ? (
    <div
      dangerouslySetInnerHTML={{ __html: scores.summary }}
      className="card__summ"
    />
  ) : (
    <div className="card__summ">Description not found.</div>
  );

  const scoreShow = scores
    ? scores.categories.map((category) => (
        <ScoreMaker key={innerId++} score={category} />
      ))
    : "No Categories";

  const removeMe = (id) => {
    dispath(deleteCity({ id: id }));
  };
  return (
    <Element name={city.id}>
      <div className="single__card card__color">
        <div
          className="card__title"
          style={{ backgroundImage: `url(${backImg})` }}
        >
          <h2 className="title__text card__text__title">
            {mainInfo ? mainInfo.name : "Не найденно"}{" "}
          </h2>
        </div>
        {summText}

        <div className="card__body">
          <div className="card__score">{scoreShow}</div>
          <InfoMaker key={innerId++} info={deatailes} />
          <button
            className="button__delete__color special__button__text card__delete__button"
            onClick={() => removeMe(city.id)}
          >
            Delete
          </button>
        </div>
      </div>
    </Element>
  );
};

export default SingleCard;

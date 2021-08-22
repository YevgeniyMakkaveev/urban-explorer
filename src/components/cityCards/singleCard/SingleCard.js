import ScoreMaker from "./scoreMaker";
import InfoMaker from "./infoMaker/InfoMaker";
import { Element } from "react-scroll";
import "./SingleCard.scss";

const SingleCard = ({ city }) => {
  let innerId = 1500;
  console.log(city);
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
        <div className="card__body">
          {summText}
          <div className="card__score">{scoreShow}</div>
          <InfoMaker key={innerId++} info={deatailes} />
        </div>
      </div>
    </Element>
  );
};

export default SingleCard;

import ScoreMaker from "./scoreMaker";
import InfoMaker from "./infoMaker/InfoMaker";
import "./SingleCard.scss";

const SingleCard = ({ city }) => {
  console.log(city);
  const { scores, mainInfo, deatailes, img } = city;
  const backImg = img ? img.web : null;
  const summText = scores.summary ? (
    <div
      dangerouslySetInnerHTML={{ __html: scores.summary }}
      className="card__summ"
    />
  ) : (
    <div className="card__summ">Description not found.</div>
  );

  return (
    <div className="single__card">
      <div
        className="card__title"
        style={{ backgroundImage: `url(${backImg})` }}
      >
        <h2 className="title__text">
          {mainInfo ? mainInfo.name : "Не найденно"}{" "}
        </h2>
      </div>
      {summText}
      <div className="card__score">
        {scores.categories.map((category) => (
          <ScoreMaker score={category} />
        ))}
      </div>
      <InfoMaker info={deatailes} />
    </div>
  );
};

export default SingleCard;

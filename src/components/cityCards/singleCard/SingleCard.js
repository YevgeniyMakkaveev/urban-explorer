import ScoreMaker from "./scoreMaker";
import InfoMaker from "./infoMaker/InfoMaker";
import "./SingleCard.scss";

const SingleCard = ({ city }) => {
  console.log(city);
  const { scores, mainInfo, deatailes } = city;
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
      {summText}
      {scores.categories.map((category) => (
        <ScoreMaker score={category} />
      ))}
      <InfoMaker info={deatailes} />
    </div>
  );
};

export default SingleCard;

import "./ScoreMaker.scss";
const ScoreMaker = ({ score }) => {
  const backgroundPicker = (score) => {
    if (score < 3) {
      return "score__bad";
    } else if (score < 6) {
      return "score__ok";
    } else {
      return "score__good";
    }
  };

  const { name, score_out_of_10 } = score;
  const lineScore = `${score_out_of_10 * 10}%`;

  return (
    <div className="score__card">
      <h4>{name}</h4>
      <div className="all__bar">
        <div
          className={`progress__bar ${backgroundPicker(score_out_of_10)}`}
          style={{ width: lineScore }}
        ></div>
      </div>
    </div>
  );
};
export default ScoreMaker;

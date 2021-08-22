import "./infoMaker.scss";
const InfoMaker = ({ info }) => {
  const sizeInfo = info[1];
  const costInfo = info[3];
  const economyInfo = info[5];

  const sizeHandler = (sizeInfo) => {
    const { label, data } = sizeInfo;
    return (
      <div className="extra__size">
        <p> {label}</p>
        {data.map((field) => (
          <div key={field.id}>
            {field.float_value.toFixed(2)} {field.label}
          </div>
        ))}
      </div>
    );
  };

  const costHandler = (cost) => {
    const { label, data } = cost;

    let arr = [];
    for (let i = 1; i < data.length; i++) {
      arr.push(data[i]);
    }
    arr.sort((a, b) => {
      return a.label.length - b.label.length;
    });
    return (
      <div className="extra__cost">
        <p>{label}</p>
        <div className="cost__item__wrap">
          {arr.map((field) => (
            <div className="extra__cost__item" key={field.id}>
              <p>{` ${
                field.currency_dollar_value
              }$ for ${field.label.toLowerCase()} `}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };

  const economyHandler = (economy) => {
    const { label, data } = economy;
    const money = data[0];
    const exchange = data[1];
    return (
      <div className="extra__economy">
        <p>{label}</p>
        <div>{`${money.label} ${money.string_value}`}</div>
        <div>{`${exchange.float_value.toFixed(2)} ${exchange.label}`}</div>
      </div>
    );
  };
  return (
    <div className="card__extra">
      {sizeHandler(sizeInfo)}
      {costHandler(costInfo)}
      {economyHandler(economyInfo)}
    </div>
  );
};
export default InfoMaker;

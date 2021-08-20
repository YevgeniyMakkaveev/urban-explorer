const InfoMaker = ({ info }) => {
  const sizeInfo = info[1];
  const costInfo = info[3];
  const economyInfo = info[5];

  const sizeHandler = (sizeInfo) => {
    const { label, data } = sizeInfo;
    return (
      <div>
        <p> {label}</p>
        {data.map((field) => (
          <div key={field.id}>
            {field.float_value} {field.label}
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

    return (
      <div>
        <p>{label}</p>
        {arr.map((field) => (
          <div>
            {field.currency_dollar_value} {field.label}
          </div>
        ))}
      </div>
    );
  };
  const economyHandler = (economy) => {
    const { label, data } = economy;
    const money = data[0];
    const exchange = data[1];
    return (
      <div>
        <p>{label}</p>
        <div>
          {money.label}
          {money.string_value}
        </div>
        <div>
          {exchange.float_value}
          {exchange.label}
        </div>
      </div>
    );
  };
  return (
    <div>
      {sizeHandler(sizeInfo)}
      {costHandler(costInfo)}
      {economyHandler(economyInfo)}
    </div>
  );
};
export default InfoMaker;

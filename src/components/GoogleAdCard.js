import "./GoogleAdCard.css";

const GoogleAdCard = (props) => {

  const formatDate = (dateString) => {
    const dateObj = new Date(dateString);
    const month = dateObj.toLocaleString("default", { month: "short" });
    const day = dateObj.getDate();
    return `${month} ${day}`;
  };

  function convertImpressionsRange(impressions) {
    const [lower, upper] = impressions.split("-");
    const lowerK = Math.floor(parseInt(lower) / 1000);
    const upperK = Math.floor(parseInt(upper) / 1000);
    return `${lowerK}K-${upperK}K`;
  }

  return (
    <div className="cards-container">
    <div className="card">
      <div className="iframe-container">
        <iframe src={props.image} scrolling="no" />
      </div>
      <div className="details-container">
        <div className="advertiser-name">{props.name}</div>
        <div className="impressions">
          <p>shown</p>
          <div className="impressions-numbers">
            {convertImpressionsRange(props.impressions)}
          </div>
          <p>times</p>
        </div>
        <div className="date-range">
          <p>from</p>
          <div className="date-numbers">
            {formatDate(props.startDate)} - {formatDate(props.endDate)}
          </div>
          <p>( {props.days} days)</p>
        </div>
        <div className="spend-range">
          <p>spent</p>
          <div className="spend-numbers">
            ${props.spendStart} - ${props.spendEnd}
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default GoogleAdCard;

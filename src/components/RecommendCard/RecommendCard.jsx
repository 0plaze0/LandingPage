import "./RecommendCard.scss";

const RecommendCard = ({ item }) => {
  return (
    <div className="app__recommendCard">
      <div className="app__recommendCard-img">
        <img src={item.image} alt="courses-images" />
      </div>
      <div className="app__recommendCard-tags">
        {item.tags.map((tag, index) => (
          <span key={index} className="tags">
            {tag}
          </span>
        ))}
      </div>
      <div className="app__recommendCard-info">
        <h4>{item.title}</h4>
        <p>{item.desc}</p>
        <div className="app__recommondedCard-prize">
          <span className="cost">{`$${item.cost}`}</span>{" "}
          <span className="cutCost">{`$${item.cutCost}`}</span>{" "}
          <span className="discount">{`${item.discount}%off`}</span>
        </div>
      </div>

      <button className="app__recommendCard-btn">View Details</button>
    </div>
  );
};

export default RecommendCard;

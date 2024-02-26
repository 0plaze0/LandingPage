import { RiArrowDropDownLine } from "react-icons/ri";

import { FaStar } from "react-icons/fa";
import { image } from "../../constants";

const CoursesCard = ({ item }) => {
  return (
    <div className="app__courses-card" key={item.id}>
      <div className="app__courses-container">
        {item.tag ? (
          <div className="app__courses-tag">
            {item.tag.icon}
            <span>{item.tag.text}</span>
          </div>
        ) : (
          <></>
        )}

        <div className="app__courses-serial">{item.id}</div>
        <div className="app__courses-data">
          <div className="app__courses-img">
            <img src={image.course} alt="course" />
          </div>
          <div className="app__courses-info">
            <p>
              <strong>{item.title}</strong> {item.desc}
            </p>
            <h4>Main Highlights</h4>
            <p className="app__courses-mainhighlights">{item.mainHighlights}</p>
            <a href="#">
              Show more
              <RiArrowDropDownLine
                style={{ position: "absolute", top: "4px", right: "-16px" }}
              />
            </a>
          </div>
          <button className="app__courses-btn">View Details</button>
          <div className="app__courses-rating">
            <h2>{item.rating}</h2>
            <p>{item.ratingText}</p>
            <FaStar style={{ color: "rgba(226, 226, 5)" }} />
            <FaStar style={{ color: "rgba(226, 226, 5)" }} />
            <FaStar style={{ color: "rgba(226, 226, 5)" }} />
            <FaStar style={{ color: "rgba(226, 226, 5)" }} />
            <FaStar style={{ color: "rgba(226, 226, 5)" }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursesCard;

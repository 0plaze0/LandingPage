import { useState, useEffect } from "react";

import { RecommendCard } from "./../index";
import { data } from "../../constants";
import "./RecommendCourse.scss";

const RecommendCourse = () => {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    setCourses(data.RecommendCourseDetails);
  });
  return (
    <div className="app__recommendCourse">
      <ul>
        {courses.map((item) => (
          <RecommendCard key={item.id} item={item} />
        ))}
      </ul>
    </div>
  );
};

export default RecommendCourse;

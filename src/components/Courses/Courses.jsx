import "./Courses.scss";
import { CoursesCard } from "./../index";
import { useEffect, useState } from "react";
import { data } from "./../../constants";

const Courses = () => {
  const [courseDetails, setcourseDetails] = useState([]);

  useEffect(() => {
    setcourseDetails(data.courseDetails);
  }, []);
  return (
    <div className="app__courses">
      {courseDetails.length ? (
        <>
          {courseDetails.map((item) => (
            <CoursesCard key={item.id} item={item} />
          ))}
        </>
      ) : (
        <h1>No Courses found</h1>
      )}
    </div>
  );
};

export default Courses;

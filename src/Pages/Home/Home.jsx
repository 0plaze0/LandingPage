import "./Home.scss";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { BsInfoCircle } from "react-icons/bs";
import { RiArrowDropDownLine } from "react-icons/ri";
import { RecommendCourse, Courses, SignUp } from "./../../components";

const Home = () => {
  return (
    <div className="app__home">
      <div className="app__home-details">
        <h1 className="app__title">Best Website builders in the US</h1>
        <hr />
        <div className="app__home-info">
          <div>
            <IoIosCheckmarkCircleOutline />
            Last Updated - <time>February 22, 2020</time> <BsInfoCircle />
            Avertising Disclosure
          </div>
          <div>
            Top Relevant <RiArrowDropDownLine style={{ fontSize: "24px" }} />
          </div>
        </div>
        <hr />
        <div className="app__filterTags">
          {[
            "Tools",
            "AWS Builder",
            "Start Build",
            "Tooling",
            "BlueHosting",
          ].map((item, index) => (
            <div key={index}>{item}</div>
          ))}
        </div>
        <div className="app__filterGist">{`Home > Hosting for All > Hosting > Hosting > Hosting `}</div>
      </div>
      <Courses />
      <h1>Releated deals you might like for </h1>
      <RecommendCourse />
      <SignUp />
    </div>
  );
};

export default Home;

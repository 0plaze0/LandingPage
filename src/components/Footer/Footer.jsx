import { useEffect, useState } from "react";
import "./Footer.scss";
import { RiArrowDropDownLine } from "react-icons/ri";
import { data } from "../../constants";

const Footer = () => {
  const [footerLinks, setFooterLinks] = useState([]);
  useEffect(() => {
    setFooterLinks(data.footerLinks);
  }, []);
  return (
    <div className="app__footer">
      {footerLinks.map((item) => (
        <div className="app__footer-links" key={item.id}>
          <h1>{item.title}</h1>
          <ul>
            {item.links.map((link, index) => (
              <li className="app__footer-link" key={index}>
                <a href={`#${link.link}`}>{link.name}</a>
              </li>
            ))}
          </ul>
        </div>
      ))}
      <div className="app__footer-united">
        United State{" "}
        <RiArrowDropDownLine
          style={{ position: "absolute", fontSize: "24px" }}
        />
      </div>
    </div>
  );
};

export default Footer;

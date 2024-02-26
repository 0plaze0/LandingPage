import { HiMenuAlt4, HiX, HiSearch } from "react-icons/hi";
import { motion } from "framer-motion";
import "./Navbar.scss";
import { useState } from "react";

const navLinks = [
  { id: 1, name: "Categoires", link: "Categories" },
  { id: 2, name: "Website Builders", link: "Website Builders" },
  { id: 3, name: "Today's deals", link: "Today's deals" },
];

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="app__navbar">
      <div className="app_navbar-search">
        <HiSearch style={{ fontSize: "20px" }} />
        <input type="text" />
      </div>
      <ul className="app__navbar-links">
        {navLinks.map((item) => (
          <li key={`links-${item.id}`} className="app__flex p-text">
            <div />
            <a href={`#${item.link}`}>{item.name}</a>
          </li>
        ))}
      </ul>
      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={() => setToggle(true)} />
        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: "easeOut" }}
          >
            <HiX onClick={() => setToggle(false)} />
            <ul>
              {navLinks.map((item) => (
                <li key={item.id}>
                  <a href={`#${item.link}`} onClick={() => setToggle(false)}>
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

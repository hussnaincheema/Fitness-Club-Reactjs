import React, { useState } from "react";
import "./Header.css";
import Logo from "../../assets/Logo.png";
import Bars from "../../assets/bars.png";
import { div } from "framer-motion/client";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-scroll";

const Header = () => {
  const mobile = window.innerWidth <= 618 ? true : false;
  const [menuOpened, setMenuOpened] = useState(false);
  return (
    <div className="header">
      <img src={Logo} alt="Header Logo" className="logo" />

      {menuOpened === false && mobile === true ? (
        <div className="menu_bars" onClick={() => setMenuOpened(true)}>
          <img src={Bars} alt="Bars Image" />
        </div>
      ) : (
        <ul className="header_menu">
          <IoMdClose
            className="close_icon"
            onClick={() => setMenuOpened(false)}
          />
          <li>
            <Link
              onClick={() => setMenuOpened(false)}
              to="home"
              span={true}
              smooth={true}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setMenuOpened(false)}
              to="programs"
              span={true}
              smooth={true}
            >
              Programs
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setMenuOpened(false)}
              to="reasons"
              span={true}
              smooth={true}
            >
              Why Us
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setMenuOpened(false)}
              to="plans"
              span={true}
              smooth={true}
            >
              Plans
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setMenuOpened(false)}
              to="testimonials"
              span={true}
              smooth={true}
            >
              Testimonials
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Header;

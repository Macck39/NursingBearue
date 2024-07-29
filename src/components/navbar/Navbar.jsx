import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { RiBarChartHorizontalLine } from "react-icons/ri";
import { IoCloseSharp, IoHome } from "react-icons/io5";
import Logo from "../../assets/Ragini-Logo.png";
import "./navbar.css";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => setShowNavbar(!showNavbar);

  const closeNavbar = () => setShowNavbar(false);

  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
          <Link to="/">
            <img src={Logo} alt="logo" id="logo-img" />
          </Link>
        </div>
        <div className="menu-icon" onClick={handleShowNavbar}>
          {showNavbar ? (
            <IoCloseSharp size={32} className="close-icon" />
          ) : (
            <RiBarChartHorizontalLine size={32} className="bar-icon" />
          )}
        </div>
        <div className={`nav-elements ${showNavbar && "active"}`}>
          <ul>
            <li>
              <NavLink to="/" onClick={closeNavbar}>
                <i class="fa-solid fa-house-chimney"></i>HOME
              </NavLink>
            </li>
            <li>
              <NavLink to="/about-us" onClick={closeNavbar}>
                <i class="fa-solid fa-circle-exclamation"></i>ABOUT US
              </NavLink>
            </li>
            <li>
              <NavLink to="/videos" onClick={closeNavbar}>
                <i class="fa-solid fa-video"></i>VIDEOS
              </NavLink>
            </li>
            <li>
              <NavLink to="/services" onClick={closeNavbar}>
                <i class="fa-solid fa-briefcase-medical"></i>SERVICES
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" onClick={closeNavbar}>
                <i class="fa-solid fa-phone"></i>CONTACT US
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

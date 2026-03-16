import React, { useEffect, useState } from "react";
import "./Navbar.css";
import logo from "../../assets/edusityAssets/logo.png";
import menuicon from "../../assets/edusityAssets/menuicon.png";
import { Link, useLocation } from "react-router-dom";

const Navbar: React.FC = () => {
  const [sticky, setSticky] = useState<boolean>(false);
  const [mobileMenu, setMobileMenu] = useState<boolean>(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setMobileMenu((prev) => !prev);
  };

  return (
    <nav className={`container ${sticky || location.pathname !== "/" ? "darknav" : ""}`}>
      <img src={logo} alt="" className="logo" />

      <ul className={mobileMenu ? "" : "hideMobileMenu"}>
        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/about">About us</Link>
        </li>

        <li>
          <Link to="/contact" className="btn">
            Contact us
          </Link>
        </li>
      </ul>

      <img
        src={menuicon}
        alt=""
        className="menuicon"
        onClick={toggleMenu}
      />
    </nav>
  );
};

export default Navbar;
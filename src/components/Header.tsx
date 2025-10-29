import React from "react";
import "../index.css";
import { FaSearch, FaShoppingCart } from "react-icons/fa";
// import logo from "../assets/site.png";
import siteLogo from "../assets/site.png";
import { Link } from "react-router-dom";
const Header: React.FC = () => {
  return (
    <div className="header">
      <div className="header-top">
        <FaSearch className="header-icon" />
        <img src={siteLogo} alt="Site Logo" className="header-logo" />

            <Link to="/cart">
          <FaShoppingCart className="header-icon" />
        </Link>

      </div>

      <div className="header-links">
        <a href="#">رجالي</a>
        <a href="#">حريمي</a>
        <a href="#">أطفال</a>
        <a href="#">أحذية</a>
      </div>
    </div>
  );
};

export default Header;

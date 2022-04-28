import "./Navbar.css";
import React from "react";
import Gallery from "../Gallery/Gallery";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <span className="logoname">
          SUPPLY <br></br> INTERIORS
        </span>
        <br></br>
        <span className="slogan">INTERIOR DESIGN</span>

        <ul className="pageLinks">
          <li className="pageLink">
            <Link to="/" style={{ textDecoration: "none", color: "black" }}>
              HOME
            </Link>
          </li>
          <li className="pageLink">
            <Link
              to="/about"
              style={{ textDecoration: "none", color: "black" }}
            >
              ABOUT
            </Link>
          </li>
          <li className="pageLink">SERVICES</li>
          <li className="pageLink">WORK</li>
          <br></br>
          <Link
            to="/contact"
            style={{ textDecoration: "none", color: "black" }}
          >
            CONTACT
          </Link>
        </ul>
      </div>
    </>
  );
};

export default Navbar;

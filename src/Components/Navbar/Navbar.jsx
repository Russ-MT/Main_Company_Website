import React from "react";
import "./Navbar.scss";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { changeBgColor } from "../../features/BackgroundColor/BackgroundColor";

function Navbar(props) {
  //get the page's background color state
  const { bgColor } = useSelector((state) => state.bgColor);

  // let tmpColor = bgColor;

  // if (bgColor === undefined) {
  //   tmpColor = "black";
  // }

  return (
    <header>
      <div className="header--container">
        <div className="logo">LOGO</div>

        <div className="nav--links">
          <NavLink
            to="/"
            style={({ isActive }) => ({
              textDecoration: isActive ? "underline" : "none",
            })}
            className="nav--link"
          >
            Home
          </NavLink>
          <NavLink
            to="about"
            style={({ isActive }) => ({
              textDecoration: isActive ? "underline" : "none",
            })}
            className="nav--link"
          >
            About
          </NavLink>
          <NavLink
            to="socials"
            style={({ isActive }) => ({
              textDecoration: isActive ? "underline" : "none",
            })}
            className="nav--link"
          >
            Socials
          </NavLink>
          <NavLink
            to="career"
            style={({ isActive }) => ({
              textDecoration: isActive ? "underline" : "none",
            })}
            className="nav--link"
          >
            Careers
          </NavLink>
        </div>
      </div>
    </header>
  );
}

export default Navbar;

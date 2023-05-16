import React from "react";
import "./Navbar.scss";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

function Navbar(props) {
  const { bgColor } = useSelector((state) => state.bgColor);

  return (
    <header>
      <div
        id="navbar"
        className="header--container"
        style={{ backgroundColor: bgColor }}
      >
        <div className="nav--container" style={{ backgroundColor: bgColor }}>
          <div
            className="logo"
            style={{ color: bgColor === "black" ? "white" : "black" }}
          >
            LOGO
          </div>
          <div className="nav--links">
            <NavLink
              to="/"
              style={({ isActive }) => ({
                textDecoration: isActive ? "underline" : "none",
                color: bgColor === "black" ? "white" : "black",
              })}
              className="nav--link"
            >
              Home
            </NavLink>
            <NavLink
              to="about"
              style={({ isActive }) => ({
                textDecoration: isActive ? "underline" : "none",
                color: bgColor === "black" ? "white" : "black",
              })}
              className="nav--link"
            >
              About
            </NavLink>
            <NavLink
              to="socials"
              style={({ isActive }) => ({
                textDecoration: isActive ? "underline" : "none",
                color: bgColor === "black" ? "white" : "black",
              })}
              className="nav--link"
            >
              Socials
            </NavLink>
            <NavLink
              to="career"
              style={({ isActive }) => ({
                textDecoration: isActive ? "underline" : "none",
                color: bgColor === "black" ? "white" : "black",
              })}
              className="nav--link"
            >
              Careers
            </NavLink>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;

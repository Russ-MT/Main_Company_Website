import React from "react";
import "./Navbar.scss";
import { NavLink } from "react-router-dom";

function Navbar(props) {
  return (
    <header>
      <div id="navbar" className="header--container">
        <div className="nav--container">
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
      </div>
    </header>
  );
}

export default Navbar;

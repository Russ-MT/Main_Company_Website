import React from "react";
import "./Navbar.scss";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { changeBgColor } from "../../features/BackgroundColor/BackgroundColor";
import { useEffect, useState } from "react";

function Navbar(props) {
  //get the page's background color state
  const { bgColor } = useSelector((state) => state.bgColor);

  return (
    <header>
      <div
        className="header--container"
        style={{
          color: bgColor === "white" ? "black" : "white",
          opacity: 0.8,
          borderBottom: `1px solid ${bgColor === "white" ? "black" : "white"}`,
          backgroundColor: bgColor,
          zIndex: 2,
        }}
      >
        <div className="logo">LOGO</div>

        <div className="nav--links">
          <NavLink
            to="/"
            style={({ isActive }) => ({
              textDecoration: isActive ? "underline" : "none",
              color: bgColor === "white" ? "black" : "white",
            })}
            className="nav--link"
          >
            Home
          </NavLink>
          <NavLink
            to="about"
            style={({ isActive }) => ({
              textDecoration: isActive ? "underline" : "none",
              color: bgColor === "white" ? "black" : "white",
            })}
            className="nav--link"
          >
            About
          </NavLink>
          <NavLink
            to="socials"
            style={({ isActive }) => ({
              textDecoration: isActive ? "underline" : "none",
              color: bgColor === "white" ? "black" : "white",
            })}
            className="nav--link"
          >
            Socials
          </NavLink>
          <NavLink
            to="career"
            style={({ isActive }) => ({
              textDecoration: isActive ? "underline" : "none",
              color: bgColor === "white" ? "black" : "white",
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

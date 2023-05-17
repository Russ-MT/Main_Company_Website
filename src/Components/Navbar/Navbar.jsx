import React from "react";
import "./Navbar.scss";
import { NavLink, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

function Navbar(props) {
  const { bgColor } = useSelector((state) => state.bgColor);
  // const [click, setClick] = useState(false);
  // const [path, setPath] = useState("");
  // const location = useLocation();

  // useEffect(() => {
  //   if (location.pathname) {
  //     setPath(location.pathname);
  //   }
  // }, []);

  // const handleClick = () => {
  //   setClick((state) => !state);
  // };

  return (
    <motion.header
      style={{ backgroundColor: bgColor }}
      initial={{ y: "-500px" }}
      animate={{ y: 0 }}
      exit={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* <div
        // id="navbar"
        className="header--container"
        // style={{ backgroundColor: bgColor }}
      >*/}
      <div className="nav--container">
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
            onClick={() => handleClick()}
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
            onClick={() => handleClick()}
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
            onClick={() => handleClick()}
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
            onClick={() => handleClick()}
          >
            Careers
          </NavLink>
        </div>
        {/* {/* </div> */}
      </div>
    </motion.header>
  );
}

export default Navbar;

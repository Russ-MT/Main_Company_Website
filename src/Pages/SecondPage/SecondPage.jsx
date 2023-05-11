import React from "react";
import "./SecondPage.scss";
import { useEffect, useState, useRef } from "react";
import "intersection-observer";
import { useSelector, useDispatch } from "react-redux";
import { changeBgColor } from "../../features/BackgroundColor/BackgroundColor";

function SecondPage(props) {
  const currRef = useRef(null);
  const dispatch = useDispatch();

  //listening user scroll and checking whether currentpage or not, if current page => change bg color stage to curr bg color
  useEffect(() => {
    const handleScroll = () => {
      const pageHeight = window.innerHeight;
      const scrollPosition = window.scrollY;

      const currentPage = Math.ceil(scrollPosition / pageHeight);
      if (currentPage === 2) {
        const col = currRef.current.style.backgroundColor;
        dispatch(changeBgColor(col));
      }
    };

    // Add event listener for scroll event
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div
        className="second-page--container"
        ref={currRef}
        style={{ backgroundColor: "white" }}
      ></div>
    </>
  );
}

export default SecondPage;

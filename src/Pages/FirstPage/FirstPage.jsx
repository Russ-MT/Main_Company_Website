import React from "react";
import "./FirstPage.scss";
import { useEffect, useState, useRef } from "react";
import "intersection-observer";
import { useSelector, useDispatch } from "react-redux";
import { changeBgColor } from "../../features/BackgroundColor/BackgroundColor";
import { useInView } from "framer-motion";

function FirstPage(props) {
  const currRef = useRef(null);
  const isInView = useInView(currRef);
  const dispatch = useDispatch();

  useEffect(() => {
    // const handleScroll = () => {
    if (isInView) {
      const col = currRef.current.style.backgroundColor;
      dispatch(changeBgColor(col));
    }
    // };

    // // Add event listener for scroll event
    // window.addEventListener("scroll", handleScroll);

    // // Clean up the event listener on component unmount
    // return () => {
    //   window.removeEventListener("scroll", handleScroll);
    // };
  }, [isInView]);

  return (
    <>
      <div
        className="first-page--container"
        ref={currRef}
        // style={{ backgroundColor: "yellow" }}
      >
        <div className="container"></div>
      </div>
    </>
  );
}

export default FirstPage;

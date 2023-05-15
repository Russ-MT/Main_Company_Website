import React from "react";
import "./SecondPage.scss";
import { useEffect, useState, useRef } from "react";
import "intersection-observer";
import { useSelector, useDispatch } from "react-redux";
import { changeBgColor } from "../../features/BackgroundColor/BackgroundColor";
import { motion, useInView } from "framer-motion";

function SecondPage(props) {
  const containerRef = useRef(null);
  const currRef = useRef(null);
  const dispatch = useDispatch();
  const isInView = useInView(currRef);

  useEffect(() => {
    // const handleScroll = () => {
    if (isInView) {
      const col = currRef.current.style.backgroundColor;
      dispatch(changeBgColor(col));
    }
    // };

    // Add event listener for scroll event
    // window.addEventListener("scroll", handleScroll);

    // // Clean up the event listener on component unmount
    // return () => {
    //   window.removeEventListener("scroll", handleScroll);
    // };
  }, [isInView]);

  return (
    <>
      <div className="second-page" ref={currRef}>
        <div className="sec-page--container">
          <div className="text--container">
            {isInView && (
              <motion.h1
                className="text"
                animate={{
                  opacity: 1,
                  y: "100px",
                  //   y: `${currPage === 2 ? "150vh" : "0vh"}`,
                  // rotate: 360,
                }}
                initial={{
                  y: "1000px",
                  opacity: 0,
                }}
                transition={{
                  duration: 1,
                }}
              >
                SHAPING WEB3
              </motion.h1>
            )}

            {isInView && (
              <motion.h1
                className="text"
                animate={{
                  opacity: 1,
                  // y: "120px",
                  x: "0",
                  //   y: `${isInView  ? "150vh" : "0vh"}`,
                }}
                initial={{
                  // y: "400px",
                  y: "120px",

                  x: "3000px",

                  opacity: 0,
                }}
                transition={{
                  duration: 1.2,
                  // type: "spring",
                  // stiffness: 80,
                  // dumping: 50,
                }}
                style={{ fontSize: "5rem" }}
              >
                THROUGH
              </motion.h1>
            )}

            {isInView && (
              <motion.h1
                className="text"
                animate={{
                  opacity: 1,
                  // y: "130px",
                  x: "0",
                  //   y: `${isInView  ? "150vh" : "0vh"}`,
                }}
                initial={{
                  y: "150px",
                  x: "-1000px",
                  opacity: 0,
                }}
                transition={{
                  duration: 1.5,
                }}
              >
                STORYTELLING
              </motion.h1>
            )}

            {isInView && (
              <motion.h1
                className="text"
                animate={{
                  opacity: 1,
                  // y: "150px",
                  x: "0",
                  //   y: `${isInView  ? "150vh" : "0vh"}`,
                }}
                initial={{
                  y: "200px",
                  x: "-1000px",
                  opacity: 0,
                }}
                transition={{
                  duration: 1.5,
                }}
              >
                EXPERIENCES
              </motion.h1>
            )}

            {/* <h1 className="text">SHAPING WEB3</h1>
            <h1 className="text">THROUGH</h1>
            <h1 className="text">STORYTELLING,</h1>
            <h1 className="text">EXPERIENCES</h1>
            <h1 className="text">AND COMMUNITY.</h1> */}
          </div>

          <div className="box--container">
            {isInView && (
              <motion.div
                className="box"
                animate={{
                  opacity: 1,
                  y: "60vh",
                  //   y: `${currPage > 0.8 ? "150vh" : "0vh"}`,
                  rotate: 360,
                }}
                initial={{
                  opacity: 0.5,
                  y: 0,
                }}
                transition={{
                  duration: 1.2,
                }}
              ></motion.div>
            )}
          </div>
        </div>
        <div className="gradient--container" ref={containerRef}></div>
      </div>
    </>
  );
}

export default SecondPage;

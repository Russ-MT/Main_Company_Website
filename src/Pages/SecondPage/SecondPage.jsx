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
                  y: "500px",
                  opacity: 0,
                }}
                transition={{
                  duration: 1,
                }}
                style={{ fontWeight: 100, fontSize: "3rem" }}
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
                style={{
                  fontWeight: 100,
                  fontSize: "3rem",
                  letterSpacing: "20px",
                }}
              >
                THROUGH
              </motion.h1>
            )}

            {isInView && (
              <motion.h1
                className="text--header"
                animate={{
                  // y: "130px",
                  opacity: 1,
                  x: "0",
                  //   y: `${isInView  ? "150vh" : "0vh"}`,
                }}
                initial={{
                  y: "130px",
                  x: "-500px",
                  opacity: 0,
                }}
                transition={{
                  duration: 1,
                }}
                // style={{ filter: "blur(20px)" }}
              >
                STORYTELLING
              </motion.h1>
            )}

            {isInView && (
              <motion.h1
                className="text--header"
                animate={{
                  opacity: 1,
                  // y: "150px",
                  x: "0",
                  //   y: `${isInView  ? "150vh" : "0vh"}`,
                }}
                initial={{
                  y: "110px",
                  x: "-500px",
                  opacity: 0,
                }}
                transition={{
                  duration: 1,
                }}
                // style={{ filter: "blur(20px)" }}
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

          <div className="box--container ">
            {/* {isInView && ( */}
            <div
              className="box "
              animate={{
                opacity: 1,
                y: 0,
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
            ></div>
            {/* )} */}
          </div>
        </div>
        <div className="gradient--container" ref={containerRef}></div>
      </div>
    </>
  );
}

export default SecondPage;

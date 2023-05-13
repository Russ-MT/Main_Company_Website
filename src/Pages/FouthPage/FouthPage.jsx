import React from "react";
import { useEffect, useState, useRef } from "react";
import "intersection-observer";
import { useSelector, useDispatch } from "react-redux";
import { changeBgColor } from "../../features/BackgroundColor/BackgroundColor";
import { motion, useInView } from "framer-motion";
import "./FourthPage.scss";

function FourthPage(props) {
  const containerRef = useRef(null);
  const currRef = useRef(null);
  const dispatch = useDispatch();
  const isInView = useInView(currRef);

  useEffect(() => {
    if (isInView) {
      const col = currRef.current.style.backgroundColor;
      dispatch(changeBgColor(col));
    }
  }, [isInView]);

  return (
    <>
      <div
        className="fourth-page"
        ref={currRef}
        style={{ backgroundColor: "black" }}
      >
        {isInView && (
          <motion.div
            className="fourth-page--container"
            animate={{
              opacity: 1,
              y: 0,
              //   y: `${currPage === 2 ? "150vh" : "0vh"}`,
            }}
            initial={{
              y: "-100px",
              opacity: 0,
            }}
            transition={{
              duration: 2,
            }}
          >
            <div className="text--container">
              <motion.h1
                className="text"
                animate={{
                  opacity: 1,
                  x: 0,
                  //   x: `${currPage === 2 ? "150vh" : "0vh"}`,
                }}
                initial={{
                  x: "-500px",
                  opacity: 0,
                }}
                transition={{
                  duration: 2,
                }}
              >
                FAQs
              </motion.h1>
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
          </motion.div>
        )}
        {/* <div className="gradient--container" ref={containerRef}></div> */}
      </div>
    </>
  );
}

export default FourthPage;

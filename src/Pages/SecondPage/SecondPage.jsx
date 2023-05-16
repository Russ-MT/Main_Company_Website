import React from "react";
import "./SecondPage.scss";
import { useRef } from "react";
import "intersection-observer";
import { motion, useInView } from "framer-motion";

function SecondPage(props) {
  const containerRef = useRef(null);
  const currRef = useRef(null);
  const isInView = useInView(currRef);

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
              <motion.div
                className="content--one"
                animate={{
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
                <h1 className="text--header--one">STORYTELLING</h1>

                <h1 className="text--header--one">STORYTELLING</h1>
              </motion.div>
            )}
            {isInView && (
              <motion.div
                className="content--one"
                animate={{
                  opacity: 1,

                  x: "0",
                  //   y: `${isInView  ? "150vh" : "0vh"}`,
                }}
                initial={{
                  y: "230px",
                  x: "-500px",
                  opacity: 0,
                }}
                transition={{
                  duration: 1,
                }}
                // style={{ filter: "blur(20px)" }}
              >
                <h1 className="text--header--one">EXPERIENCES</h1>

                <h1 className="text--header--one">EXPERIENCES</h1>
              </motion.div>
            )}

            {/* {isInView && (
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
            )} */}

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

import React from "react";
import "./ThirdPage.scss";
import { useEffect, useState, useRef } from "react";
import "intersection-observer";
import { useSelector, useDispatch } from "react-redux";
import {
  changeBgColor,
  setCurrPage,
} from "../../features/BackgroundColor/BackgroundColor";
import { motion } from "framer-motion";
import TypeWriterEffect from "react-typewriter-effect";

function ThirdPage(props) {
  const currRef = useRef(null);
  const dispatch = useDispatch();
  const { currPage } = useSelector((state) => state.bgColor);

  //listening user scroll and checking whether currentpage or not, if current page => change bg color stage to curr bg color
  useEffect(() => {
    const handleScroll = () => {
      const pageHeight = window.innerHeight;
      const scrollPosition = window.scrollY;

      const currentPage = Math.ceil(scrollPosition / pageHeight);
      if (currentPage === 3) {
        const col = currRef.current.style.backgroundColor;
        dispatch(changeBgColor(col));
        dispatch(setCurrPage(currentPage));
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
        className="third-page"
        ref={currRef}
        style={{ backgroundColor: "white" }}
      >
        {currPage > 2 && (
          <motion.div
            className="third-page--container"
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
            <div className="article">
              <p className="article--heading">
                <TypeWriterEffect
                  startDelay={2000}
                  cursorColor="#3F3D56"
                  multiText={[
                    "Let's",
                    "Connect !!",
                    "The ....",
                    "Dots",
                    "Let's Connect The Dots",
                  ]}
                  multiTextDelay={1000}
                  typeSpeed={40}
                  multiTextLoop
                />
                {/* <Typical
                  steps={[
                    "Let's",
                    2000,
                    "CONNECT",
                    2000,
                    "THE DOTS",
                    2000,
                    // "LET'S CONNECT THE DOTS",
                    // 5000,
                  ]}
                  loop={Infinity}
                  wrapper="p"
                /> */}
              </p>

              <p className="article--description">
                Lorem ipsum dolor sit amet consectetur. Gravida ultricies nunc
                auctor sit nunc etiam nibh et. In massa at habitant orci in
                commodo. Volutpat tortor in sagittis hendrerit lacus in vel
                scelerisque. Curabitur at quam eget orci et tortor.
              </p>

              <a className="learn-more--btn">Learn More</a>
            </div>

            <div className="particle-motion"></div>
          </motion.div>
        )}
      </div>
    </>
  );
}

export default ThirdPage;

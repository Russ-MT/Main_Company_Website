import React from "react";
import "./ThirdPage.scss";
import { useEffect, useState, useRef } from "react";
import "intersection-observer";
import { useSelector, useDispatch } from "react-redux";
import { changeBgColor } from "../../features/BackgroundColor/BackgroundColor";
import { motion, useInView } from "framer-motion";
import TypeWriterEffect from "react-typewriter-effect";
import FractalTree from "./Fractal";

function ThirdPage(props) {
  const currRef = useRef(null);
  const isInView = useInView(currRef);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("Listening");
    // const handleScroll = () => {
    if (isInView) {
      console.log("In View");
      const col = currRef.current.style.backgroundColor;
      console.log(col);
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
      <div
        className="third-page"
        ref={currRef}
        style={{ backgroundColor: "white" }}
      >
        {isInView && (
          <div
            className="third-page--container"
            // animate={{
            //   opacity: 1,
            //   y: 0,
            // }}
            // initial={{
            //   y: "-100px",
            //   opacity: 0,
            // }}
            // transition={{
            //   duration: 2,
            // }}
          >
            <div className="article">
              <h1 className="article--heading">
                <TypeWriterEffect
                  startDelay={0}
                  cursorColor="#3F3D56"
                  multiText={[
                    "Let's",
                    "Connect !!",
                    "The ....",
                    "Dots",
                    "Let's Connect The Dots.",
                  ]}
                  multiTextDelay={1000}
                  typeSpeed={40}
                  multiTextLoop
                />
              </h1>

              <p className="article--description">
                Lorem ipsum dolor sit amet consectetur. Gravida ultricies nunc
                auctor sit nunc etiam nibh et. In massa at habitant orci in
                commodo. Volutpat tortor in sagittis hendrerit lacus in vel
                scelerisque. Curabitur at quam eget orci et tortor.
              </p>

              <a className="learn-more--btn">Learn More</a>
            </div>
            <div className="particle-motion">
              <FractalTree />
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default ThirdPage;


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
    // const handleScroll = () => {
    if (isInView) {
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
      <div className="third-page" ref={currRef}>
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
              <h1 className="article--heading targetDiv">
                <TypeWriterEffect
                  startDelay={0}
                  cursorColor="black"
                  multiText={[
                    "LET'S",
                    "CONNECT",
                    "THE ....",
                    "DOTS",
                    "LET'S CONNECT THE DOTS.",
                  ]}
                  multiTextDelay={1000}
                  typeSpeed={40}
                  multiTextLoop
                />
              </h1>

              <p className="article--description targetDiv">
                We believe that the potential of web3 can be realized when we
                start with imagination, not limitations.No borders,no
                rulers,just people making cool shit, together.In the
                Yugaverse,fans and players are owner sand creators,and in the
                game of web3,everyone can create and play together on one team.
              </p>

              <a className="learn-more--btn">Learn More</a>
            </div>
            {/* <div className="particle-motion">
              <FractalTree />
            </div> */}
          </div>
        )}
      </div>
    </>
  );
}

export default ThirdPage;

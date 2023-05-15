import React from "react";
import "./FourthPage.scss";
import { useEffect, useRef, useState } from "react";
import "intersection-observer";
import { useDispatch } from "react-redux";
import { changeBgColor } from "../../features/BackgroundColor/BackgroundColor";
import { useInView } from "framer-motion";
import { Fade } from "react-reveal";
import { motion } from "framer-motion";

function FourthPage() {
  const currRef = useRef(null);
  const isInView = useInView(currRef);
  const dispatch = useDispatch();
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    //  console.log("Listening");
    // const handleScroll = () => {
    if (isInView) {
      // console.log("In View");
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
      <div className="fourth-page" ref={currRef}>
        <div className="experiments--container">
          {/* <div className="experiments--heading--container">
            <motion.h1
              className="experiments--heading"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              animate={{
                x: isHovered ? 500 : 0,
                //  opacity: 0.5,
              }}
              initial={{
                opacity: 1,
              }}
              transition={{
                duration: 1,
              }}
            >
              OUR EXPERIMENTS <span>🧪</span>{" "}
            </motion.h1>
          </div> */}
          <div className="experiments--heading--container">
            <div
              className="experiments--heading"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              //   animate={{
              //     x: isHovered ? 500 : 0,
              //     //  opacity: 0.5,
              //   }}
              //   initial={{
              //     opacity: 1,
              //   }}
              //   transition={{
              //     duration: 1,
              //   }}
            >
              <motion.p
                className="span"
                animate={{
                  x: isHovered ? -340 : 0,
                  //  opacity: 0.5,
                }}
                initial={{
                  opacity: 1,
                }}
                transition={{
                  type: "spring",
                }}
              >
                O
              </motion.p>
              <motion.p
                animate={{
                  x: isHovered ? -300 : 0,
                  //  opacity: 0.5,
                }}
                initial={{
                  opacity: 1,
                }}
                transition={{
                  type: "spring",
                }}
              >
                U
              </motion.p>
              <motion.p
                animate={{
                  x: isHovered ? -260 : 0,
                  //  opacity: 0.5,
                }}
                initial={{
                  opacity: 1,
                }}
                transition={{
                  type: "spring",
                }}
              >
                R
              </motion.p>
              <motion.p
                animate={{
                  x: isHovered ? -220 : 0,
                  //  opacity: 0.5,
                }}
                initial={{
                  opacity: 1,
                }}
                transition={{
                  type: "spring",
                }}
              >
                &nbsp;
              </motion.p>
              <motion.p
                animate={{
                  x: isHovered ? -180 : 0,
                  //  opacity: 0.5,
                }}
                initial={{
                  opacity: 1,
                }}
                transition={{
                  type: "spring",
                }}
              >
                E
              </motion.p>
              <motion.p
                animate={{
                  x: isHovered ? -140 : 0,
                  //  opacity: 0.5,
                }}
                initial={{
                  opacity: 1,
                }}
                transition={{
                  type: "spring",
                }}
              >
                X
              </motion.p>
              <motion.p
                animate={{
                  x: isHovered ? -100 : 0,
                  //  opacity: 0.5,
                }}
                initial={{
                  opacity: 1,
                }}
                transition={{
                  type: "spring",
                }}
              >
                P
              </motion.p>
              <motion.p
                animate={{
                  x: isHovered ? -60 : 0,
                  //  opacity: 0.5,
                }}
                initial={{
                  opacity: 1,
                }}
                transition={{
                  type: "spring",
                }}
              >
                E
              </motion.p>
              <motion.p
                animate={{
                  x: isHovered ? -20 : 0,
                  //  opacity: 0.5,
                }}
                initial={{
                  opacity: 1,
                }}
                transition={{
                  type: "spring",
                }}
              >
                R
              </motion.p>
              <motion.p
                animate={{
                  x: isHovered ? 20 : 0,
                  //  opacity: 0.5,
                }}
                initial={{
                  opacity: 1,
                }}
                transition={{
                  type: "spring",
                }}
              >
                I
              </motion.p>
              <motion.p
                animate={{
                  x: isHovered ? 60 : 0,
                  //  opacity: 0.5,
                }}
                initial={{
                  opacity: 1,
                }}
                transition={{
                  type: "spring",
                }}
              >
                M
              </motion.p>
              <motion.p
                animate={{
                  x: isHovered ? 100 : 0,
                  //  opacity: 0.5,
                }}
                initial={{
                  opacity: 1,
                }}
                transition={{
                  type: "spring",
                }}
              >
                E
              </motion.p>
              <motion.p
                animate={{
                  x: isHovered ? 140 : 0,
                  //  opacity: 0.5,
                }}
                initial={{
                  opacity: 1,
                }}
                transition={{
                  type: "spring",
                }}
              >
                N
              </motion.p>
              <motion.p
                animate={{
                  x: isHovered ? 180 : 0,
                  //  opacity: 0.5,
                }}
                initial={{
                  opacity: 1,
                }}
                transition={{
                  type: "spring",
                }}
              >
                T
              </motion.p>
              <motion.p
                animate={{
                  x: isHovered ? 220 : 0,
                  //  opacity: 0.5,
                }}
                initial={{
                  opacity: 1,
                }}
                transition={{
                  type: "spring",
                }}
              >
                S
              </motion.p>
              <motion.p
                animate={{
                  x: isHovered ? 260 : 0,
                  //  opacity: 0.5,
                }}
                initial={{
                  opacity: 1,
                }}
                transition={{
                  type: "spring",
                }}
              >
                &nbsp;
              </motion.p>
              <motion.p
                animate={{
                  x: isHovered ? 320 : 0,
                  //  opacity: 0.5,
                }}
                initial={{
                  opacity: 1,
                }}
                transition={{
                  type: "spring",
                }}
              >
                🧪
              </motion.p>
              {/* UR EXPERIMENTS <span></span>{" "} */}
            </div>
          </div>

          {isInView && (
            <div className="card-section">
              <Fade top>
                <div className="experiments--card card-1 card-back">
                  <img
                    src="https://media.tenor.com/uHVmd0uBuU0AAAAC/bored-ape-yacht-club-nft.gif"
                    alt=""
                    className="hidden"
                  />
                  {/* <div className="description--container">
                    {" "}
                    <p>This is test box</p>{" "}
                  </div> */}
                </div>
              </Fade>
              <Fade top>
                <div className="experiments--card card-2">
                  <img
                    src="https://media.tenor.com/RmBLoLsN40EAAAAd/bored-ape.gif"
                    alt=""
                    className="hidden"
                  />
                </div>
              </Fade>
              <Fade top>
                <div className="experiments--card card-3">
                  <img
                    src="https://openseauserdata.com/files/4f7f4845bbb2fe94a713fd5d2b00d4ae.gif"
                    alt=""
                    className="hidden"
                  />
                </div>
              </Fade>
              <Fade top>
                <div className="experiments--card card-4">
                  <img
                    src="https://d1mjtvp3d1g20r.cloudfront.net/2022/02/14115405/alien-ape.gif"
                    alt=""
                    className="hidden"
                  />
                </div>
              </Fade>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default FourthPage;

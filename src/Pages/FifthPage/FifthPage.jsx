import React from "react";
import { useEffect, useState, useRef } from "react";
import "intersection-observer";
import { useSelector, useDispatch } from "react-redux";
import { changeBgColor } from "../../features/BackgroundColor/BackgroundColor";
import { motion, useInView } from "framer-motion";
import "./FifthPage.scss";
import Plus from "../../assets/plus.svg";
import Cross from "../../assets/cross.svg";

function FifthPage(props) {
  const containerRef = useRef(null);
  const currRef = useRef(null);
  const dispatch = useDispatch();
  const isInView = useInView(currRef);
  const [showAns, setShowAns] = useState(false);
  const [divId, setDivId] = useState("");
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isInView) {
      const col = currRef.current.style.backgroundColor;
      dispatch(changeBgColor(col));
    }
  }, [isInView]);

  const ansTrigger = (event) => {
    const id = event.target.id;
    setShowAns((state) => !state);
    setDivId(id);
  };
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <>
      <div className="fourth-page" ref={currRef}>
        {/* {isInView && ( */}
        <motion.div
          className="fourth-page--container"
          // animate={{
          //   opacity: 1,
          //   y: 0,
          //   //   y: `${currPage === 2 ? "150vh" : "0vh"}`,
          // }}
          // initial={{
          //   y: "-100px",
          //   opacity: 0,
          // }}
          // transition={{
          //   duration: 2,
          // }}
        >
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
          <div className="text--container">
            <div className="header--container">
              <motion.h1
                animate={{
                  x: isHovered ? "200px" : 0,
                  //   y: `${currPage > 0.8 ? "150vh" : "0vh"}`,
                }}
                initial={{
                  x: 0,
                }}
                transition={{
                  type: "spring",
                }}
                className="text"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                FAQ
              </motion.h1>
            </div>
            <div className="qna--container">
              <div className="question--container">
                <h4 className="question--text" id="div1" onClick={ansTrigger}>
                  This is Question One ?
                </h4>

                {!showAns && (
                  <img
                    id="div1"
                    src={Plus}
                    alt="svg"
                    className="svg--icons"
                    onClick={ansTrigger}
                  />
                )}
                {showAns && (
                  <img
                    id="div1"
                    src={Cross}
                    alt="svg"
                    className="svg--icons"
                    onClick={ansTrigger}
                  />
                )}
              </div>
              {showAns && divId === "div1" && (
                <div className="ans--container">
                  <h6 className="ans--text">
                    We're apes, not nerds. Something about digital scarcity and
                    immutability on the blockchain. We don't fucking know. Think
                    of them as community-focused jpegs on financial steroids
                    (actually we're pngs).
                  </h6>
                </div>
              )}
            </div>
            <div className="qna--container">
              <div className="question--container">
                <h4 className="question--text" id="div2" onClick={ansTrigger}>
                  This is Question Two ?
                </h4>

                {!showAns && (
                  <img
                    id="div2"
                    src={Plus}
                    alt="svg"
                    className="svg--icons"
                    onClick={ansTrigger}
                  />
                )}
                {showAns && (
                  <img
                    id="div1"
                    src={Cross}
                    alt="svg"
                    className="svg--icons"
                    onClick={ansTrigger}
                  />
                )}
              </div>
              {showAns && divId === "div2" && (
                <div className="ans--container">
                  <h6 className="ans--text">
                    We're apes, not nerds. Something about digital scarcity and
                    immutability on the blockchain. We don't fucking know. Think
                    of them as community-focused jpegs on financial steroids
                    (actually we're pngs).
                  </h6>
                </div>
              )}
            </div>
            <div className="qna--container">
              <div className="question--container">
                <h4 className="question--text" id="div3" onClick={ansTrigger}>
                  This is Question Three ?
                </h4>

                {!showAns && (
                  <img
                    id="div3"
                    src={Plus}
                    alt="svg"
                    className="svg--icons"
                    onClick={ansTrigger}
                  />
                )}
                {showAns && (
                  <img
                    id="div3"
                    src={Cross}
                    alt="svg"
                    className="svg--icons"
                    onClick={ansTrigger}
                  />
                )}
              </div>
              {showAns && divId === "div3" && (
                <div className="ans--container">
                  <h6 className="ans--text">
                    We're apes, not nerds. Something about digital scarcity and
                    immutability on the blockchain. We don't fucking know. Think
                    of them as community-focused jpegs on financial steroids
                    (actually we're pngs).
                  </h6>
                </div>
              )}
            </div>
            <div className="qna--container">
              <div className="question--container">
                <h4 className="question--text" id="div4" onClick={ansTrigger}>
                  This is Question Four ?
                </h4>

                {!showAns && (
                  <img
                    id="div4"
                    src={Plus}
                    alt="svg"
                    className="svg--icons"
                    onClick={ansTrigger}
                  />
                )}
                {showAns && (
                  <img
                    id="div4"
                    src={Cross}
                    alt="svg"
                    className="svg--icons"
                    onClick={ansTrigger}
                  />
                )}
              </div>
              {showAns && divId === "div4" && (
                <div className="ans--container">
                  <h6 className="ans--text">
                    We're apes, not nerds. Something about digital scarcity and
                    immutability on the blockchain. We don't fucking know. Think
                    of them as community-focused jpegs on financial steroids
                    (actually we're pngs).
                  </h6>
                </div>
              )}
            </div>
          </div>
        </motion.div>
        {/* )} */}
        {/* <div className="gradient--container" ref={containerRef}></div> */}
      </div>
    </>
  );
}

export default FifthPage;

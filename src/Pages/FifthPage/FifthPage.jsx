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
  const currRef = useRef(null);
  const dispatch = useDispatch();
  const isInView = useInView(currRef);
  const [showAns, setShowAns] = useState(false);
  const [divId, setDivId] = useState("");
  const [isHovered, setIsHovered] = useState(false);
  const [btnId, setBtnId] = useState("");

  // useEffect(() => {
  //   if (isInView) {
  //     const col = currRef.current.style.backgroundColor;
  //     dispatch(changeBgColor(col));
  //   }
  // }, [isInView]);

  const ansTrigger = (event) => {
    setDivId("");
    setBtnId("");
    // const idParent = event.target.id;

    if (event.target.nextSibling != null) {
      // console.log(`Next : ${event.target.nextSibling.className}`);
      let id = event.target.nextSibling.className;
      id = id.split(" ")[1];
      setBtnId(id);
      setDivId(id);
    } else if (event.target.nextSibling === null) {
      // console.log(`Previous :${event.target.previousSibling.id}`);
      let id = event.target.previousSibling.className;
      id = id.split(" ")[1];

      setBtnId(event.target.previousSibling.id);
      setDivId(event.target.previousSibling.id);
    }

    setShowAns((state) => !state);
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
        <motion.div className="fourth-page--container">
          <div className="box--container">
            {isInView && (
              <motion.div
                className="box"
                // animate={{
                //   opacity: 1,
                //   y: "60vh",
                //   rotate: 360,
                // }}
                // initial={{
                //   opacity: 0.5,
                //   y: 0,
                // }}
                // transition={{
                //   duration: 1.2,
                // }}
              ></motion.div>
            )}
          </div>
          <div className="text--container">
            <div className="header--container">
              <motion.h1
                animate={{
                  x: isHovered ? "200px" : 0,
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
                {showAns && divId === "div1" && btnId === "div1" ? (
                  <img
                    src={Cross}
                    alt="svg"
                    className="svg--icons div1"
                    onClick={ansTrigger}
                  />
                ) : (
                  <img
                    src={Plus}
                    alt="svg"
                    className="svg--icons div1"
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
            <motion.div
              className="qna--container"
              animate={{
                y: showAns && divId === "div1" ? "40px" : 0,
              }}
              initial={{
                y: 0,
              }}
              transition={{
                type: "spring",
              }}
            >
              <div className="question--container">
                <h4 className="question--text" id="div2" onClick={ansTrigger}>
                  This is Question Two ?
                </h4>
                {showAns && divId === "div2" && btnId === "div2" ? (
                  <img
                    src={Cross}
                    alt="svg"
                    className="svg--icons div2"
                    onClick={ansTrigger}
                  />
                ) : (
                  <img
                    src={Plus}
                    alt="svg"
                    className="svg--icons div2"
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
            </motion.div>
            <motion.div
              className="qna--container"
              animate={{
                y:
                  (showAns && divId === "div1") || (showAns && divId === "div2")
                    ? "40px"
                    : 0,
              }}
              initial={{
                y: 0,
              }}
              transition={{
                type: "spring",
              }}
            >
              <div className="question--container">
                <h4 className="question--text" id="div3" onClick={ansTrigger}>
                  This is Question Three ?
                </h4>
                {showAns && divId === "div3" && btnId === "div3" ? (
                  <img
                    src={Cross}
                    alt="svg"
                    className="svg--icons div3"
                    onClick={ansTrigger}
                  />
                ) : (
                  <img
                    src={Plus}
                    alt="svg"
                    className="svg--icons div3"
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
            </motion.div>
            <motion.div
              className="qna--container"
              animate={{
                y:
                  (showAns && divId === "div1") ||
                  (showAns && divId === "div2") ||
                  (showAns && divId === "div3")
                    ? "40px"
                    : 0,
              }}
              initial={{
                y: 0,
              }}
              transition={{
                type: "spring",
              }}
            >
              <div className="question--container">
                <h4 className="question--text" id="div4" onClick={ansTrigger}>
                  This is Question Four ?
                </h4>
                {showAns && divId === "div4" && btnId === "div4" ? (
                  <img
                    src={Cross}
                    alt="svg"
                    className="svg--icons div4"
                    onClick={ansTrigger}
                  />
                ) : (
                  <img
                    src={Plus}
                    alt="svg"
                    className="svg--icons div4"
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
            </motion.div>
          </div>
        </motion.div>
      </div>
    </>
  );
}

export default FifthPage;

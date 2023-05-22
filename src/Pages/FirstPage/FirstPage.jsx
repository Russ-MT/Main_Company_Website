import React from "react";
import "./FirstPage.scss";
import { useRef } from "react";
import "intersection-observer";
import { motion } from "framer-motion";

function FirstPage(props) {
  const currRef = useRef(null);

  return (
    <>
      <motion.div className="first-page--container" ref={currRef}>
        <div className="container">
          <div className="upper--container">
            <div className="left--container">
              {" "}
              <h1 className="first-page--title">
                EPOCH <span>(Creative Lab)</span>
              </h1>
            </div>
          </div>
          <div className="lower--container">
            <div className="right--container">
              <p className="first-page--body">
                Antinomy offers a wide range of services that apply to many
                industries. We uncover insights, design concepts and develop
                solutions - both large and small.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}

export default FirstPage;

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
          <h1
            className="first-page--title"
            style={{
              color: "black",
              fontSize: "50px",
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            This is Home Page
          </h1>
        </div>
      </motion.div>
    </>
  );
}

export default FirstPage;

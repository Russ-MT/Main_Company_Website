import React from "react";
import "./FourthPage.scss";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

function FouthPage(props) {
  const currRef = useRef(null);
  const isInView = useInView(currRef);

  return (
    <div className="fourth-page" ref={currRef}>
      <div className="fourth-page--container">
        <div className="fourth-text--container"></div>
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
      </div>
    </div>
  );
}

export default FouthPage;

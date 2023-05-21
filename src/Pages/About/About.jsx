import React from "react";
import "./About.scss";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useInView, motion } from "framer-motion";
import { changeBgColor } from "../../features/BackgroundColor/BackgroundColor";
import AboutFirstPage from "../AboutFirstPage/AboutFirstPage";
import TaleOfUs from "../../Components/TaleOfUs/TaleOfUs";
import Goals from "../../Components/Goals/Goals";

function About(props) {
  const currRef = React.useRef(null);
  const isInView = useInView(currRef);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isInView) {
      dispatch(changeBgColor("black"));
    }
  }, [isInView]);
  return (
    <>
      <motion.div
        className="about"
        ref={currRef}
        initial={{ y: "-1000px" }}
        animate={{ y: 0 }}
        exit={{ y: 0 }}
        transition={{ duration: 1 }}
      >
        <AboutFirstPage />
        <TaleOfUs />
        <Goals />
      </motion.div>
    </>
  );
}

export default About;

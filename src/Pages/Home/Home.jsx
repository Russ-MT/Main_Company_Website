import React, { useEffect, useRef, useState } from "react";
import "./Home.scss";
import SecondPage from "../SecondPage/SecondPage";
import "intersection-observer";
import FirstPage from "../FirstPage/FirstPage";
import ThirdPage from "../ThirdPage/ThirdPage";
import FourthPage from "../FourthPage/FourthPage";
import FifthPage from "../FifthPage/FifthPage";
import { useInView, motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { changeBgColor } from "../../features/BackgroundColor/BackgroundColor";

function Home(props) {
  const currRef = React.useRef(null);
  const isInView = useInView(currRef);
  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo(0, 0);

    if (isInView) {
      dispatch(changeBgColor("white"));
    }
  }, [isInView]);
  return (
    <>
      <motion.div
        className="home--container"
        initial={{ y: "1000px" }}
        animate={{ y: 0 }}
        exit={{ y: 0 }}
        transition={{ duration: 1 }}
        ref={currRef}
      >
        {/* <div> */}
        <FirstPage />
        <SecondPage />
        <ThirdPage />
        <FourthPage />
        <FifthPage />
        {/* </div> */}
      </motion.div>
    </>
  );
}

export default Home;

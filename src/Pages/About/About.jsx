import React from "react";
import "./About.scss";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useInView } from "framer-motion";
import { changeBgColor } from "../../features/BackgroundColor/BackgroundColor";

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
      <div className="about" ref={currRef}>
        <p style={{ color: "red" }}>This is about page</p>
      </div>
    </>
  );
}

export default About;

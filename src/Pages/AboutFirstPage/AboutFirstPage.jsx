import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useInView, motion } from "framer-motion";
import { changeBgColor } from "../../features/BackgroundColor/BackgroundColor";
import "./AboutFirstPage.scss";
import RightArrow from "../../assets/arrowright.svg";

function AboutFirstPage(props) {
  const currRef = React.useRef(null);
  const isInView = useInView(currRef);
  const dispatch = useDispatch();
  const [isHovered, setIsHovered] = React.useState(false);
  const [id, setId] = React.useState("");

  return (
    <>
      <motion.div
        className="about--container"
        ref={currRef}
        // initial={{ y: "-1000px" }}
        // animate={{ y: 0 }}
        // exit={{ y: 0 }}
        // transition={{ duration: 1 }}
      >
        <div
          className="header--container"
          onMouseEnter={() => {
            setIsHovered(true), setId("div1");
          }}
          onMouseLeave={() => {
            setIsHovered(false), setId("");
          }}
        >
          <motion.img
            src={RightArrow}
            alt=""
            initial={{ x: isHovered && id === "div1" ? "-1000px" : 0 }}
            animate={{ x: isHovered && id === "div1" ? 0 : "-1000px" }}
            transition={{ type: "spring", stiffness: 75 }}
            style={{ position: "absolute" }}
          />
          <motion.a
            href=""
            initial={{ x: isHovered && id === "div1" ? "-1000px" : 0 }}
            animate={{ x: isHovered && id === "div1" ? "200px" : 0 }}
            transition={{ type: "spring", stiffness: 75 }}
          >
            THE TALE OF US
          </motion.a>
        </div>
        <div
          id="div2"
          className="header--container"
          onMouseEnter={() => {
            setIsHovered(true), setId("div2");
          }}
          onMouseLeave={() => {
            setIsHovered(false), setId("");
          }}
        >
          <motion.img
            src={RightArrow}
            alt=""
            initial={{ x: isHovered && id === "div2" ? "-1000px" : 0 }}
            animate={{ x: isHovered && id === "div2" ? 0 : "-1000px" }}
            transition={{ type: "spring", stiffness: 75 }}
            style={{ position: "absolute" }}
          />
          <motion.a
            href=""
            initial={{ x: isHovered && id === "div2" ? "-1000px" : 0 }}
            animate={{ x: isHovered && id === "div2" ? "200px" : 0 }}
            transition={{ type: "spring", stiffness: 75 }}
          >
            OUR GOALS
          </motion.a>
        </div>
        <div
          id="div3"
          className="header--container"
          onMouseEnter={() => {
            setIsHovered(true), setId("div3");
          }}
          onMouseLeave={() => {
            setIsHovered(false), setId("");
          }}
        >
          <motion.img
            src={RightArrow}
            alt=""
            initial={{ x: isHovered && id === "div3" ? "-1000px" : 0 }}
            animate={{ x: isHovered && id === "div3" ? 0 : "-1000px" }}
            transition={{ type: "spring", stiffness: 75 }}
            style={{ position: "absolute" }}
          />
          <motion.a
            href=""
            initial={{ x: isHovered && id === "div3" ? "-1000px" : 0 }}
            animate={{ x: isHovered && id === "div3" ? "200px" : 0 }}
            transition={{ type: "spring", stiffness: 75 }}
          >
            THE TIMELINE
          </motion.a>
        </div>
      </motion.div>
    </>
  );
}

export default AboutFirstPage;

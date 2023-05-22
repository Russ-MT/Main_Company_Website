import React from "react";
import "./FourthPage.scss";
import { useEffect, useRef, useState } from "react";
import "intersection-observer";
import { useDispatch } from "react-redux";
import { changeBgColor } from "../../features/BackgroundColor/BackgroundColor";
import { useInView } from "framer-motion";
import { Fade } from "react-reveal";
import { motion } from "framer-motion";
import goTO from "../../assets/link.svg";

function FourthPage() {
  const currRef = useRef(null);
  const isInView = useInView(currRef);
  const dispatch = useDispatch();
  const [isHovered, setIsHovered] = useState(false);
  const [imgHover, setImgHover] = useState(false);
  const [imgId, setImgIdHover] = useState("");

  // useEffect(() => {
  //   //  console.log("Listening");
  //   // const handleScroll = () => {
  //   if (isInView) {
  //     // console.log("In View");
  //     const col = currRef.current.style.backgroundColor;
  //     console.log(col);
  //     dispatch(changeBgColor(col));
  //   }
  //   // };

  //   // Add event listener for scroll event
  //   // window.addEventListener("scroll", handleScroll);

  //   // // Clean up the event listener on component unmount
  //   // return () => {
  //   //   window.removeEventListener("scroll", handleScroll);
  //   // };
  // }, [isInView]);

  return (
    <>
      <div className="fourth-page" ref={currRef}>
        <div className="experiments--container">
          <div className="experiments--heading--container">
            <div
              className="experiments--heading"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <motion.h3 className="span">OUR EXPERIMENTS 🧪</motion.h3>
              {/* <motion.p
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
              </motion.p> */}
              {/* UR EXPERIMENTS <span></span>{" "} */}
            </div>
          </div>

          {isInView && (
            <div className="card-section">
              {/* <Fade left> */}
              <motion.div
                className="experiments--card card-1 card-back targetDiv"
                onMouseEnter={() => {
                  setImgHover(true), setImgIdHover("img1");
                }}
                onMouseLeave={() => {
                  setImgHover(false), setImgIdHover(null);
                }}
                animate={{
                  y: 0,

                  //  5,
                }}
                initial={{
                  y: "200px",
                }}
                transition={{
                  duration: 1,
                }}
              >
                {(!imgHover || imgId === "img2") && (
                  <img
                    src="https://nftevening.com/wp-content/uploads/2021/09/bored-ape-yacht-club-bayc-roadmap-2.0-version.png.webp"
                    alt=""
                    className="hidden"
                  />
                )}
                {imgHover && imgId === "img1" && (
                  <img
                    src="https://media.tenor.com/uHVmd0uBuU0AAAAC/bored-ape-yacht-club-nft.gif"
                    alt=""
                    className="hidden"
                  />
                )}
                <div className="description--container">
                  <a href="/">
                    <p>THE EVOLBITS</p>
                    <p style={{ fontWeight: 200, fontSize: "15px" }}>
                      A Rewind Story Of A LifeForm
                      {/* <img src={goTO} alt="" /> */}
                    </p>
                  </a>
                </div>
              </motion.div>
              {/* </Fade> */}
              {/* <Fade right> */}
              <motion.div
                className="experiments--card card-2 card-back targetDiv"
                onMouseEnter={() => {
                  setImgHover(true), setImgIdHover("img2");
                }}
                onMouseLeave={() => {
                  setImgHover(false), setImgIdHover(null);
                }}
                animate={{
                  y: 0,

                  //  5,
                }}
                initial={{
                  y: "200px",
                }}
                transition={{
                  duration: 1,
                }}
              >
                {(!imgHover || imgId === "img1") && (
                  <img
                    src="https://nftevening.com/wp-content/uploads/2021/09/bored-ape-yacht-club-bayc-roadmap-2.0-version.png.webp"
                    alt=""
                    className="hidden"
                  />
                )}
                {imgHover && imgId === "img2" && (
                  <img
                    src="https://openseauserdata.com/files/4f7f4845bbb2fe94a713fd5d2b00d4ae.gif"
                    alt=""
                    className="hidden"
                  />
                )}
                <div className="description--container">
                  <a href="/">
                    <p>COMING SOON</p>
                    {/* <p style={{ fontWeight: 200, fontSize: "15px" }}>
                        <img src={goTO} alt="" />
                      </p> */}
                  </a>
                </div>
              </motion.div>
              {/* </Fade> */}
              {/* <Fade top>
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
              </Fade> */}
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default FourthPage;

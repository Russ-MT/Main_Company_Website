import React from "react";
import "./SecondPage.scss";
import { useEffect, useState, useRef } from "react";
import "intersection-observer";
import { useSelector, useDispatch } from "react-redux";
import {
   changeBgColor,
   setCurrPage,
} from "../../features/BackgroundColor/BackgroundColor";
import { motion, useInView } from "framer-motion";
import { inView } from "framer-motion";

function SecondPage(props) {
   const { currPage } = useSelector((state) => state.bgColor);
   const containerRef = useRef(null);
   const currRef = useRef(null);
   const dispatch = useDispatch();

   const ref = useRef(null);
   const isInView = useInView(ref, {
      margin: "-30%",
   });

   //listening user scroll and checking whether currentpage or not, if current page => change bg color stage to curr bg color
   useEffect(() => {
      const handleScroll = () => {
         const pageHeight = window.innerHeight;
         const scrollPosition = window.scrollY;

         const currentPage = Math.ceil(scrollPosition / pageHeight);

         console.log(currentPage);

         if (currentPage >= 2 && currentPage < 4) {
            //scroll is not smooth change this to 3
            const col = currRef.current.style.backgroundColor;
            dispatch(changeBgColor(col));
            dispatch(setCurrPage(currentPage));
         }
      };

      // Add event listener for scroll event
      window.addEventListener("scroll", handleScroll);

      // Clean up the event listener on component unmount
      return () => {
         window.removeEventListener("scroll", handleScroll);
      };
   }, []);

   return (
      <>
         <div className="second-page" style={{ backgroundColor: "black" }}>
            <div className="sec-page--container">
               <div className="text--container" ref={ref}>

                     <motion.h1
                        className="text"
                        animate={{
                           opacity: 1,
                           y: isInView ? "0px" : "1000px",
                           //   y: `${currPage === 2 ? "150vh" : "0vh"}`,
                          //  rotate: 360,
                        }}
                        initial={{
                           y: "1000px",
                           opacity: 0,
                        }}
                        transition={{
                           duration: 1,
                        }}
                     >
                        SHAPING WEB3
                     </motion.h1>

                     <motion.h1
                        className="text"
                        animate={{
                           opacity: 1,
                           // y: "120px",
                           x: isInView ? "0" : "3000px",
                           //   y: `${currPage === 2 ? "150vh" : "0vh"}`,
                        }}
                        initial={{
                           // y: "400px",
                           y: "120px",

                           x: "3000px",

                           opacity: 0,
                        }}
                        transition={{
                           duration: 1.2,
                           // type: "spring",
                           // stiffness: 80,
                           // dumping: 50,
                        }}
                        style={{ fontSize: "5rem" }}
                     >
                        THROUGH
                     </motion.h1>

                     <motion.h1
                        className="text"
                        animate={{
                           opacity: 1,
                           // y: "130px",
                           x: isInView ? "0" : "-1000px",
                           //   y: `${currPage === 2 ? "150vh" : "0vh"}`,
                        }}
                        initial={{
                           y: "150px",
                           x: "-1000px",
                           opacity: 0,
                        }}
                        transition={{
                           duration: 1.5,
                        }}
                     >
                        STORYTELLING
                     </motion.h1>

                     <motion.h1
                        className="text"
                        animate={{
                           opacity: 1,
                           // y: "150px",
                           x: isInView ? "0" : "-1000px",
                           //   y: `${currPage === 2 ? "150vh" : "0vh"}`,
                        }}
                        initial={{
                           y: "200px",
                           x: "-1000px",
                           opacity: 0,
                        }}
                        transition={{
                           duration: 1.5,
                        }}
                     >
                        EXPERIENCES
                     </motion.h1>

                  {/* <h1 className="text">SHAPING WEB3</h1>
            <h1 className="text">THROUGH</h1>
            <h1 className="text">STORYTELLING,</h1>
            <h1 className="text">EXPERIENCES</h1>
            <h1 className="text">AND COMMUNITY.</h1> */}
               </div>

               <div className="box--container">

                     <motion.div
                        className="box"
                        animate={{
                           opacity: 1,
                           y: isInView ? "60vh" : "0",
                           //   y: `${currPage > 0.8 ? "150vh" : "0vh"}`,
                           rotate: isInView ? 360 : 0,
                        }}
                        initial={{
                           opacity: 0.5,
                        }}
                        transition={{
                           duration: 1.2,
                        }}
                     ></motion.div>

               </div>
            </div>
            {/* <div className="gradient--container" ref={containerRef}></div> */}
         </div>
      </>
   );
}

export default SecondPage;

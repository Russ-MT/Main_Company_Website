import React from "react";
import "./ThirdPage.scss";
import { useEffect, useState, useRef } from "react";
import Typical from "react-typical";
import "intersection-observer";
import { useSelector, useDispatch } from "react-redux";
import {
   changeBgColor,
   setCurrPage,
} from "../../features/BackgroundColor/BackgroundColor";

function ThirdPage(props) {
   const currRef = useRef(null);
   const dispatch = useDispatch();

   //listening user scroll and checking whether currentpage or not, if current page => change bg color stage to curr bg color
   useEffect(() => {
      const handleScroll = () => {
         const pageHeight = window.innerHeight;
         const scrollPosition = window.scrollY;

         const currentPage = Math.ceil(scrollPosition / pageHeight);
         if (currentPage === 4) {
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
         <div className="third-page" ref={currRef} style={{ backgroundColor: "white" }}>
            <div className="third-page--container">
               <div className="article">
                  <h1 className="article--heading">
                     <Typical
                        steps={["LET'S", 1000, "CONNECT", 1000, "THE DOTS", 1000, "LET'S CONNECT THE DOTS", 5000]}
                        loop={Infinity}
                        wrapper="p"
                     />
                  </h1>
                  <p className="article--description">
                     Lorem ipsum dolor sit amet consectetur. Gravida ultricies nunc auctor
                     sit nunc etiam nibh et. In massa at habitant orci in commodo.
                     Volutpat tortor in sagittis hendrerit lacus in vel scelerisque.
                     Curabitur at quam eget orci et tortor.
                  </p>

                  <button className="learn-more--btn">Learn More</button>
               </div>
               <div className="particle-motion"></div>
            </div>
         </div>
      </>
   );
}

export default ThirdPage;

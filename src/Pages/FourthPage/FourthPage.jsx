import React from "react";
import "./FourthPage.scss";
import { useEffect, useRef } from "react";
import "intersection-observer";
import { useDispatch } from "react-redux";
import { changeBgColor } from "../../features/BackgroundColor/BackgroundColor";
import { useInView } from "framer-motion";
import { Fade } from "react-reveal";

function FourthPage() {
   const currRef = useRef(null);
   const isInView = useInView(currRef);
   const dispatch = useDispatch();

   useEffect(() => {
      console.log("Listening");
      // const handleScroll = () => {
      if (isInView) {
         console.log("In View");
         const col = currRef.current.style.backgroundColor;
         console.log(col);
         dispatch(changeBgColor(col));
      }
      // };

      // Add event listener for scroll event
      // window.addEventListener("scroll", handleScroll);

      // // Clean up the event listener on component unmount
      // return () => {
      //   window.removeEventListener("scroll", handleScroll);
      // };
   }, [isInView]);

   return (
      <>
         <div className="fourth-page" ref={currRef} style={{ backgroundColor: "white" }}>
            <div className="experiments--container">
               <h1 className="experiments--heading">OUR EXPERIMENTS</h1>
               {isInView && (
                  <div className="card-section">
                     <Fade top>
                        <div className="experiments--card card-1 card-back">
                           <img
                              src="https://media.tenor.com/uHVmd0uBuU0AAAAC/bored-ape-yacht-club-nft.gif"
                              alt=""
                              className="hidden"
                           />
                        </div>
                     </Fade>
                     <Fade top>
                        <div className="experiments--card card-2">
                           <img
                              src="https://media.tenor.com/RmBLoLsN40EAAAAd/bored-ape.gif"
                              alt=""
                              className="hidden"
                           />
                        </div>
                     </Fade>
                     <Fade top>
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
                     </Fade>
                  </div>
               )}
            </div>
         </div>
      </>
   );
}

export default FourthPage;

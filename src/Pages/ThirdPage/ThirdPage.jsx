import React from "react";
import "./ThirdPage.scss";
import { useRef } from "react";
import "intersection-observer";
import { useInView } from "framer-motion";
import TypeWriterEffect from "react-typewriter-effect";

function ThirdPage(props) {
  const currRef = useRef(null);
  const isInView = useInView(currRef);

  return (
    <>
      <div className="third-page" ref={currRef}>
        {isInView && (
          <div className="third-page--container">
            <div className="article">
              <h1 className="article--heading targetDiv">
                <TypeWriterEffect
                  startDelay={0}
                  cursorColor="black"
                  multiText={[
                    "LET'S",
                    "CONNECT",
                    "THE ....",
                    "DOTS",
                    "LET'S CONNECT THE DOTS.",
                  ]}
                  multiTextDelay={1000}
                  typeSpeed={40}
                  multiTextLoop
                />
              </h1>

              <p className="article--description targetDiv">
                We believe that the potential of web3 can be realized when we
                start with imagination, not limitations.No borders,no
                rulers,just people making cool shit, together.In the
                Yugaverse,fans and players are owner sand creators,and in the
                game of web3,everyone can create and play together on one team.
              </p>

              <a className="learn-more--btn">Learn More</a>
            </div>
            {/* <div className="particle-motion">
              <FractalTree />
            </div> */}
          </div>
        )}
      </div>
    </>
  );
}

export default ThirdPage;

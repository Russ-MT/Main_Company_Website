import React from "react";
import "./FirstPage.scss";
import { useRef } from "react";
import "intersection-observer";

function FirstPage(props) {
  const currRef = useRef(null);

  return (
    <>
      <div className="first-page--container" ref={currRef}>
        <div className="container"></div>
      </div>
    </>
  );
}

export default FirstPage;

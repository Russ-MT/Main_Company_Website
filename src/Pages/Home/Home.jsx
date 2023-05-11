import React, { useEffect, useRef, useState } from "react";
import "./Home.scss";
import SecondPage from "../SecondPage/SecondPage";
import "intersection-observer";
import FirstPage from "../FirstPage/FirstPage";

function Home(props) {
  return (
    <>
      <FirstPage />
      <SecondPage />
    </>
  );
}

export default Home;

import React, { useEffect, useRef, useState } from "react";
import "./Home.scss";
import SecondPage from "../SecondPage/SecondPage";
import "intersection-observer";
import FirstPage from "../FirstPage/FirstPage";
import ThirdPage from "../ThirdPage/ThirdPage";
import FourthPage from "../FourthPage/FourthPage";

function Home(props) {
  return (
    <>
      <FirstPage />
      <SecondPage />
      <ThirdPage />
      <FourthPage />
    </>
  );
}

export default Home;

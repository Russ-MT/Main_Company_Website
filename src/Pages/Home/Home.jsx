import React, { useEffect, useRef, useState } from "react";
import "./Home.scss";
import SecondPage from "../SecondPage/SecondPage";
import "intersection-observer";
import FirstPage from "../FirstPage/FirstPage";
import ThirdPage from "../ThirdPage/ThirdPage";
import FourthPage from "../FourthPage/FourthPage";
import FifthPage from "../FifthPage/FifthPage";

function Home(props) {
  return (
    <>
      <FirstPage />
      <SecondPage />
      <ThirdPage />
      <FourthPage />
      <FifthPage />
    </>
  );
}

export default Home;

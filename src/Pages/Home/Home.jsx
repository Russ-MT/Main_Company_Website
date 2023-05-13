import React, { useEffect, useRef, useState } from "react";
import "./Home.scss";
import SecondPage from "../SecondPage/SecondPage";
import "intersection-observer";
import FirstPage from "../FirstPage/FirstPage";
import ThirdPage from "../ThirdPage/ThirdPage";
import FouthPage from "../FouthPage/FouthPage";

function Home(props) {
  return (
    <>
      <FirstPage />
      <SecondPage />
      <ThirdPage />
      <FouthPage />
    </>
  );
}

export default Home;

import React, { useEffect, useRef, useState } from "react";
import "./Home.scss";
import SecondPage from "../SecondPage/SecondPage";
import "intersection-observer";
import FirstPage from "../FirstPage/FirstPage";
import ThirdPage from "../ThirdPage/ThirdPage";

function Home(props) {
  return (
    <>
      <FirstPage />
      <SecondPage />
      <ThirdPage />
    </>
  );
}

export default Home;

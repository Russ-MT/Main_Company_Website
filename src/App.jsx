import React from "react";
import "./App.scss";
import Home from "./Pages/Home/Home";
import Navbar from "./Components/Navbar/Navbar";

function App(props) {
  return (
    <div>
      <Navbar />
      <Home />
    </div>
  );
}

export default App;

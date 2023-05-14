import React from "react";
import "./App.scss";
import Home from "./Pages/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer/Footer";

function App(props) {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route index element={<Home />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

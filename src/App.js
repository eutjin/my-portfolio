import React, { useEffect, useState, useRef } from "react";
import {
  BrowserRouter as Router,
  Link,
  Switch,
  Route,
  Routes,
} from "react-router-dom";
import Enerlyzr from "./components/Enerlyzr";
import Gunaesik from "./components/Gunaesik";
import Movirevue from "./components/Movirevue";
import Home from "./Home";

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/gunaesik" element={<Gunaesik/>} />
      <Route path="/enerlyzr" element={<Enerlyzr/>} />
      <Route path="/movirevue" element={<Movirevue/>} />
    </Routes>
    </>
  )
}

export default App
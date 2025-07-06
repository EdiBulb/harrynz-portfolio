import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Education from "./pages/Education";
import Certificate from "./pages/Certificate";
import Extra from "./pages/Extra";

function App() {
  return (
    <div>
      <Navbar />
      <div id="home"><Home/></div>

      <section className="h-24 bg-gradient-to-b from-gray-900 to-gray-100" />

      <div id="about"><About/></div>
      <div id="projects"><Projects/></div>
      <div id="education"><Education/></div>
      <div id="certificate"><Certificate/></div>
      <div id="extra"><Extra/></div>
    </div>
  );
}

export default App;

import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Education from "./pages/Education";
import Certificate from "./pages/Certificate";
import Extra from "./pages/Extra";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/education" element={<Education />} />
          <Route path="/certificate" element={<Certificate />} />
          <Route path="/extra" element={<Extra />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

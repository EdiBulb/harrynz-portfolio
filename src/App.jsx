import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
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
          <Route path="/" element={<About />} />
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

import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Education from "./pages/Education";
import Certificate from "./pages/Certificate";
import Activity from "./pages/Activities";

function App() {
  return (
    // ✅ 라이트/다크 기본 색 + 전환
    <div className="min-h-screen bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-gray-100 transition-colors duration-300">
      <Navbar />

      <main className="max-w-5xl mx-auto px-4 pt-16">{/* ✅ 네비 높이만큼 여백 */}
        <div id="home" className="scroll-mt-16"><Home/></div>

        {/* ✅ 그라데이션도 다크 대응 */}
        <div className="h-24 bg-gradient-to-b from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900" />

        <div id="about" className="scroll-mt-16"><About/></div>
        <div id="projects" className="scroll-mt-16"><Projects/></div>
        <div id="education" className="scroll-mt-16"><Education/></div>
        <div id="certificate" className="scroll-mt-16"><Certificate/></div>
        <div id="activity" className="scroll-mt-16"><Activity/></div>
      </main>
    </div>
  );
}

export default App;

import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Education from "./pages/Education";
import Certificate from "./pages/Certificate";
import Activity from "./pages/Activities";
import ThemeToggle from "./components/ThemeToggle";

function App() {
  return (
    // ✅ 루트에 라이트/다크 색상 동시 지정 + 부드러운 전환
    <div className="min-h-screen bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-gray-100 transition-colors duration-300">
      <Navbar />

      {/* ✅ 임시: 항상 보이는 떠있는 토글 */}
      <div className="fixed right-4 bottom-4 z-[9999]">
        <ThemeToggle />
      </div>

      <main className="max-w-5xl mx-auto px-4">
        <div id="home"><Home/></div>

        {/* ✅ 그라데이션도 다크 대응 */}
        <div className="h-24 bg-gradient-to-b from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900" />

        <div id="about"><About/></div>
        <div id="projects"><Projects/></div>
        <div id="education"><Education/></div>
        <div id="certificate"><Certificate/></div>
        <div id="activity"><Activity/></div>
      </main>
    </div>
  );
}

export default App;

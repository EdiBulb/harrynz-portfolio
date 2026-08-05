import { useEffect, useState } from "react";
import { FaArrowDown } from "react-icons/fa";

const ROLES = ["Full-Stack Developer", "Content Creator", "DevOps Enthusiast", "AI Explorer"];

const useTypewriter = (words, { typingMs = 90, deletingMs = 45, pauseMs = 1500 } = {}) => {
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex % words.length];

    if (!deleting && text === current) {
      const t = setTimeout(() => setDeleting(true), pauseMs);
      return () => clearTimeout(t);
    }

    if (deleting && text === "") {
      setDeleting(false);
      setWordIndex((i) => (i + 1) % words.length);
      return;
    }

    const t = setTimeout(() => {
      setText(current.slice(0, text.length + (deleting ? -1 : 1)));
    }, deleting ? deletingMs : typingMs);

    return () => clearTimeout(t);
  }, [text, deleting, wordIndex, words, typingMs, deletingMs, pauseMs]);

  return text;
};

const Home = () => {
  const roleText = useTypewriter(ROLES);

  const scrollTo = (id) => (ev) => {
    ev.preventDefault();
    const el = document.getElementById(id);
    if (!el) return;
    const y = el.getBoundingClientRect().top + window.scrollY - 64;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  return (
    <div className="relative min-h-screen flex flex-col-reverse md:flex-row items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-gray-900 to-black text-white px-6 md:px-20">
      {/* 배경 블롭 */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-16 -left-16 w-72 h-72 bg-blue-600/30 rounded-full mix-blend-screen filter blur-3xl animate-blob" />
        <div className="absolute top-1/3 -right-10 w-72 h-72 bg-purple-600/30 rounded-full mix-blend-screen filter blur-3xl animate-blob [animation-delay:2s]" />
        <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-cyan-500/20 rounded-full mix-blend-screen filter blur-3xl animate-blob [animation-delay:4s]" />
      </div>

      {/* 텍스트 부분 */}
      <div className="relative flex-1 text-center md:text-left space-y-5">
        <h2 className="text-2xl md:text-3xl font-medium text-gray-200 animate-fade-up">
          Hi There! <span className="inline-block">👋</span>
        </h2>
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-400 animate-fade-up [animation-delay:150ms] [animation-fill-mode:backwards]">
          I'M HARRY
        </h1>
        <h3 className="h-8 text-xl md:text-2xl text-blue-300 font-medium animate-fade-up [animation-delay:300ms] [animation-fill-mode:backwards]">
          {roleText}
          <span className="inline-block w-[2px] h-6 align-middle ml-1 bg-blue-300 animate-blink" />
        </h3>

        <p className="max-w-md text-gray-400 animate-fade-up [animation-delay:450ms] [animation-fill-mode:backwards]">
          I build meaningful, real-world software, and I'm always curious about what's next.
        </p>

        <div className="flex gap-4 justify-center md:justify-start pt-2 animate-fade-up [animation-delay:600ms] [animation-fill-mode:backwards]">
          <a
            href="#projects"
            onClick={scrollTo("projects")}
            className="px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-500 font-semibold transition-colors shadow-lg shadow-blue-900/40"
          >
            View My Work
          </a>
          <a
            href="#about"
            onClick={scrollTo("about")}
            className="px-6 py-3 rounded-lg border border-gray-600 hover:border-gray-400 hover:bg-white/5 font-semibold transition-colors"
          >
            About Me
          </a>
        </div>
      </div>

      {/* image */}
      <div className="relative flex-1 mb-10 md:mb-0 flex justify-center">
        <div className="relative animate-float">
          <div className="absolute -inset-3 rounded-full bg-gradient-to-tr from-blue-500 via-cyan-400 to-purple-500 opacity-70 blur-md" />
          <img
            src="/profile/Harry_coding_image.png"
            alt="Developer Illustration"
            className="relative w-64 md:w-96 object-contain rounded-full border-4 border-gray-900"
          />
        </div>
      </div>

      {/* 스크롤 인디케이터 */}
      <a
        href="#about"
        onClick={scrollTo("about")}
        aria-label="Scroll to About section"
        className="hidden md:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2 text-gray-400 hover:text-white transition-colors animate-fade [animation-delay:1s] [animation-fill-mode:backwards]"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <FaArrowDown className="animate-bounce" />
      </a>
    </div>
  );
};

export default Home;

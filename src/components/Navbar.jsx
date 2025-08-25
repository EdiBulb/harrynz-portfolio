import React, { useEffect, useRef, useState } from "react";
import ThemeToggle from "./ThemeToggle";

// App.jsx의 섹션 id와 동일하게 유지하세요.
const SECTIONS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "certificate", label: "Certificate" },
  { id: "activity", label: "Activity" },
];

const Navbar = () => {
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const closeBtnRef = useRef(null);

  // 스크롤 시 배경/그림자 적용
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // 스크롤스파이: 현재 섹션 감지
  useEffect(() => {
    const opts = { rootMargin: "-45% 0px -45% 0px", threshold: [0, 0.2, 0.6, 1] };
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) setActive(e.target.id);
      });
    }, opts);

    SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, []);

  // 드로어 열릴 때 스크롤 잠금 + ESC 닫기 + 포커스 이동
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    document.documentElement.classList.toggle("overflow-hidden", open);
    if (open) setTimeout(() => closeBtnRef.current?.focus(), 0);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.documentElement.classList.remove("overflow-hidden");
    };
  }, [open]);

  // 고정 네비 오프셋 보정(≈64px) + 부드러운 스크롤
  const scrollTo = (id) => (ev) => {
    ev.preventDefault();
    const el = document.getElementById(id);
    if (!el) return;
    const y = el.getBoundingClientRect().top + window.scrollY - 64;
    window.scrollTo({ top: y, behavior: "smooth" });
    setOpen(false);
  };

  const linkCls = (id) =>
    `px-3 py-2 rounded-lg text-sm transition-colors ${
      active === id
        ? "text-white bg-blue-600 dark:bg-blue-500"
        : "text-gray-800 hover:bg-gray-100 dark:text-gray-100 dark:hover:bg-gray-800"
    }`;

  return (
    <nav
  className={`fixed top-0 inset-x-0 z-50 ${
    open
      ? "bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 shadow"
      : scrolled
        ? "bg-white/80 dark:bg-gray-900/80 backdrop-blur border-b border-gray-200 dark:border-gray-800 shadow"
        : "bg-white/60 dark:bg-gray-900/60 backdrop-blur"
  }`}
>
      <div className="max-w-5xl mx-auto px-4">
        <div className="h-14 flex items-center justify-between">
          {/* 로고 */}
          <a
            href="#home"
            onClick={scrollTo("home")}
            className="font-semibold text-gray-800 dark:text-white tracking-tight"
          >
            Harry’s Portfolio
          </a>

          {/* 데스크탑 메뉴 */}
          <ul className="hidden md:flex items-center gap-6">
            {SECTIONS.map(({ id, label }) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  onClick={scrollTo(id)}
                  className={linkCls(id)}
                  aria-current={active === id ? "page" : undefined}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>

          {/* 우측 액션(데스크탑) + 모바일 햄버거 */}
          <div className="flex items-center gap-2">
            <a
              href="/resume/Harry_Kang_Summer_Internship.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-block px-3 py-1.5 rounded-lg text-sm border 
                         border-gray-300 dark:border-gray-700
                         bg-white hover:bg-gray-100
                         dark:bg-gray-800 dark:hover:bg-gray-700
                         text-gray-900 dark:text-gray-100 transition"
            >
              View CV
            </a>
            <div className="hidden md:block">
              <ThemeToggle />
            </div>

            {/* 햄버거 버튼 (모바일 전용) */}
            <button
              type="button"
              className="md:hidden inline-flex items-center justify-center p-2 rounded-lg 
                         border border-gray-300 dark:border-gray-700 text-gray-800 dark:text-gray-100"
              onClick={() => setOpen(true)}
              aria-expanded={open}
              aria-controls="mobile-drawer"
              aria-label="Open menu"
            >
              {/* 햄버거 아이콘 */}
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* 상단 진행바 */}
      <ScrollProgressBar />

      {/* 오버레이 + 드로어 (모바일) */}
      {/* 오버레이 */}
      <div
        className={`md:hidden fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm transition-opacity duration-200 ${
          open ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setOpen(false)}
        aria-hidden={!open}
      />

      {/* 드로어 패널 */}
      <aside
        id="mobile-drawer"
        className={`md:hidden fixed inset-y-0 right-0 z-[61] w-72 max-w-[85%]
                    bg-white dark:bg-gray-900
                    border-l border-gray-200 dark:border-gray-800
                    shadow-2xl ring-1 ring-black/5 dark:ring-white/10
                    transform transition-transform duration-300 ease-out
                    ${open ? "translate-x-0" : "translate-x-full"}`}
        role="dialog"
        aria-modal="true"
      >
        {/* 드로어 헤더 */}
        <div className="h-14 px-4 flex items-center justify-between border-b border-gray-200 dark:border-gray-800">
          <span className="font-semibold text-gray-900 dark:text-gray-100">Menu</span>
          <button
            ref={closeBtnRef}
            type="button"
            onClick={() => setOpen(false)}
            className="inline-flex items-center justify-center p-2 rounded-lg 
                       border border-gray-300 dark:border-gray-700 text-gray-800 dark:text-gray-100"
            aria-label="Close menu"
          >
            {/* X 아이콘 */}
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <path d="M6 6l12 12M18 6l-12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </button>
        </div>

        {/* 메뉴 항목들 */}
        <nav className="px-4 py-3">
          <ul className="flex flex-col gap-1">
            {SECTIONS.map(({ id, label }) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  onClick={scrollTo(id)}
                  className={`block px-3 py-2 rounded-lg text-base transition-colors ${
                    active === id
                      ? "text-white bg-blue-600 dark:bg-blue-500"
                      : "text-gray-800 hover:bg-gray-100 dark:text-gray-100 dark:hover:bg-gray-800"
                  }`}
                  aria-current={active === id ? "page" : undefined}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>

          {/* 액션들 */}
          <div className="mt-4 flex items-center gap-2">
            <a
              href="/resume/Harry_Kang_Summer_Internship.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 px-3 py-2 rounded-lg text-sm border 
                         border-gray-300 dark:border-gray-700
                         bg-white hover:bg-gray-100
                         dark:bg-gray-800 dark:hover:bg-gray-700
                         text-gray-900 dark:text-gray-100 transition text-center"
              onClick={() => setOpen(false)}
            >
              View CV
            </a>
            <ThemeToggle />
          </div>
        </nav>
      </aside>
    </nav>
  );
};

export default Navbar;

// 상단 진행바
function ScrollProgressBar() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      setProgress(max > 0 ? (h.scrollTop / max) * 100 : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div className="h-[3px]">
      <div
        className="h-full bg-blue-600 dark:bg-blue-500 transition-[width] duration-150"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}

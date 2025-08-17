import React,{ useEffect, useState } from "react";

// cv 버튼 재사용 컴포넌트임
export default function ResumeButtons({
  href = "/resume/harry_resume.pdf", // ← PDF 경로
  className = "",
}) {
  /*download counter*/
  const KEY = "resume_download_count";
  const [count, setCount] = useState(0);

  useEffect(() => {
    const saved = Number(localStorage.getItem(KEY) || 0);
    setCount(saved);
  }, []);
  const handleDownload = () => {
    const next = count + 1;
    setCount(next);
    localStorage.setItem(KEY, String(next));
  };

  return (
    <div className={`flex flex-wrap gap-3 ${className}`}>
      {/* view button a링크를 버튼처럼 스타일링함 */}
      <a
        href={href} // pdf 경로
        target="_blank" // 새탭 열기
        rel="noopener noreferrer" // 새탭 보안(오프너 공격 방지)
        className="inline-flex items-center gap-2
                  rounded-lg px-4 py-2
                  bg-blue-600 text-white hover:bg-blue-700 transition duration-300
                  dark:bg-blue-500 dark:hover:bg-blue-600" // 다크 모드인 경우 변경
        aria-label="Open resume in a new tab" // 스크린 리더용 접근성 라벨
      >
        <span>View CV</span>
        <span aria-hidden>↗</span>
      </a>

      {/* Download */}
      <a
        href={href}
        download // 브라우저에 다운로드 하라고 요청
        onClick={handleDownload} // 다운로드 시 카운터 증가 함수 호출

        className="inline-flex items-center gap-2 rounded-lg px-4 py-2
                   dark:border-gray-700
                   bg-white hover:bg-gray-500 text-gray-900 transition duration-300
                   dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-gray-100 transition "
        aria-label="Download resume PDF"
      >
        <span>Download CV</span>
        <span aria-hidden>⬇</span>
      </a>

      {/* Small counter display */}
      <span className="text-sm text-gray-500 dark:text-gray-400">
        Downloads: {count}
      </span>
    </div>
  );
}

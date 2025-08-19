import React from "react";

// Projects.jsx 페이지에서 Group 과 Personal 프로젝트를 나눠주는 탭 component.
export default function Tabs({ tab, counts, onChange }) {
  return (
    <div className="inline-flex rounded-xl border border-gray-300 dark:border-gray-700 p-1 bg-white dark:bg-gray-800">
      
      <button
        type="button"
        onClick={() => onChange("group")}
        className={`px-4 py-2 rounded-lg text-sm transition
          ${tab === "group" // tab===group인 경우, 조건부 스타일링
            ? "bg-blue-600 text-white dark:bg-blue-500"
            : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"}`}
        aria-pressed={tab === "group"}
      >
        {/* (프로젝트 갯수) */}
        Group ({counts.group}) 
      </button>
      <button
        type="button"
        onClick={() => onChange("personal")}
        className={`px-4 py-2 rounded-lg text-sm transition
          ${tab === "personal" // tab===personal인 경우, 조건부 스타일링
            ? "bg-blue-600 text-white dark:bg-blue-500"
            : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"}`}
        aria-pressed={tab === "personal"}
      >
        {/* (프로젝트 갯수) */}
        Personal ({counts.personal})
      </button>
    </div>
  );
}
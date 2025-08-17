import React from "react";

// 함수형 컴포넌트 ProjectCard 선언
export default function ProjectCard({ project, onOpen }) { // 구조분해 할당, project: 하나의 프로젝트 객체, onOpen: 프로젝트 클릭 시 실행할 부모 함수
  return (
    //하나의 카드 영역
    <div
      className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700
                 rounded-lg p-4 shadow-md hover:shadow-xl transition duration-300 cursor-pointer"
      onClick={() => onOpen(project)} // 카드 클릭 시, onOpen 함수 실행하면서 이 project 객체를 부모에게 전달함
    >
      {project.image && ( // 조건부 렌더링: project.image가 있는 경우, <img> 출력
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          className="w-full h-56 object-cover rounded-md"
        />
      )}
        {/* 프로젝트 제목 영역 */}
      <div className="mt-3 flex items-start justify-between gap-3">
        <h2 className="text-xl font-semibold text-blue-600 dark:text-blue-400"> 
          {project.title}
        </h2>
        {/* 카테고리 뱃지 */}
        <span
          className={`shrink-0 text-xs rounded-full px-2 py-0.5
            ${project.category === "group"
              ? "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-200"
              : "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-200"}`}
          title={project.category === "group" ? "Group project" : "Personal project"}
        >
          {project.category === "group" ? "Group" : "Personal"}
        </span>
      </div>
    </div>
  );
}

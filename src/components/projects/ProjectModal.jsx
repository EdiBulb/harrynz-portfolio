import React, { useEffect, useState } from "react";
import { getYouTubeEmbed, isVideoFile } from "../../utils/video";


export default function ProjectModal({ project, onClose }) { // project:선택된 프로젝트 데이터, onClose: 모달 닫기 함수 
  const [showDemo, setShowDemo] = useState(false); // showDemo: 데모 비디오를 보여줄지 여부, 초기값은 없음


  useEffect(() => { // 프로젝트가 바뀔 때마다 showDemo를 false로 리셋, 즉, 새로운 프로젝트를 클릭하면 데모 영상이 자동으로 닫힘
    setShowDemo(false);
  }, [project?.title]);

  // 프로젝트 링크 추출
  const live = project.links?.live;
  const video = project.links?.video;
  const code  = project.links?.code;

  // 유튜브 영상인 경우와 직접 파일인 경우, 임베드 하는 방식의 차이
  const yt = video ? getYouTubeEmbed(video) : null;
  const isFile = video ? isVideoFile(video) : false;
  const shouldShowDemo = (!live && video) || showDemo;

  // contribution: 문자열/배열 안전 처리
  const contribList = Array.isArray(project.contribution)
    ? project.contribution
    : project.contribution
    ? [project.contribution]
    : [];

  return (
    // 모달 배경
    <div
      className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4"
      onClick={onClose} // 배경 클릭 시 모달 닫힘
    >
      {/* 모달 박스 */}
      <div
        className="bg-white dark:bg-gray-900 max-w-2xl w-full max-h-[80vh] overflow-y-auto
                   rounded-lg shadow-lg p-6 relative border border-gray-200 dark:border-gray-800"
        onClick={(e) => e.stopPropagation()}
      >
        {/* 댣기 버튼, times는 x 표시임 */}
        <button
          className="absolute top-3 right-4 text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white text-xl"
          onClick={onClose}
          aria-label="Close modal"
        >
          &times;
        </button>
        
        {/* 프로젝트 기본 정보 */}
        {project.image && (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-64 object-cover rounded"
          />
        )}

        <div className="mt-4 flex items-start justify-between gap-3">
          <h2 className="text-2xl font-bold">{project.title}</h2>
          <span
            className={`shrink-0 text-xs rounded-full px-2 py-0.5
              ${project.category === "group"
                ? "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-200"
                : "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-200"}`}
          >
            {project.category === "group" ? "Group" : "Personal"}
          </span>
        </div>

        {project.description && (
          <p className="mt-3 text-gray-700 dark:text-gray-200 whitespace-pre-line">
            {project.description}
          </p>
        )}

        {Array.isArray(project.tech) && project.tech.length > 0 && (
          <>
            <h3 className="mt-4 font-semibold">Tech Stack</h3>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-300">
              {project.tech.map((t, i) => <li key={i}>{t}</li>)}
            </ul>
          </>
        )}

        {contribList.length > 0 && (
          <>
            <h3 className="mt-4 font-semibold">My Contribution</h3>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-300">
              {contribList.map((item, i) => <li key={i}>{item}</li>)}
            </ul>
          </>
        )}

        {(live || video || code) && (
          <div className="flex flex-wrap gap-3 mt-5">
            {live && (
              <a
                href={live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sm px-3 py-1.5 rounded-lg
                           bg-blue-600 text-white hover:bg-blue-700
                           dark:bg-blue-500 dark:hover:bg-blue-600 transition"
              >
                Live ↗
              </a>
            )}

            {!live && video && (
              <button
                type="button"
                onClick={() => setShowDemo(true)}
                className="inline-flex items-center gap-1 text-sm px-3 py-1.5 rounded-lg
                           border border-gray-300 dark:border-gray-700
                           bg-white hover:bg-gray-100
                           dark:bg-gray-800 dark:hover:bg-gray-700 transition"
              >
                ▶ Watch Demo
              </button>
            )}

            {code && (
              <a
                href={code}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sm px-3 py-1.5 rounded-lg
                           border border-gray-300 dark:border-gray-700
                           bg-white hover:bg-gray-100
                           dark:bg-gray-800 dark:hover:bg-gray-700 transition"
              >
                Code
              </a>
            )}
          </div>
        )}

        {video && shouldShowDemo && (
          <div className="mt-4 w-full" style={{ aspectRatio: "16 / 9" }}>
            {yt ? (
              <iframe
                className="w-full h-full rounded border border-gray-200 dark:border-gray-800"
                src={yt}
                title="Demo video"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            ) : isFile ? (
              <video
                className="w-full h-full rounded border border-gray-200 dark:border-gray-800"
                src={video}
                controls
                preload="metadata"
              />
            ) : (
              <a
                href={video}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-2 text-blue-600 dark:text-blue-400 underline"
              >
                Open demo video ↗
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

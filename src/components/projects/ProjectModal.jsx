import React, { useEffect, useState } from "react";
import { getYouTubeEmbed, isVideoFile } from "../../utils/video";

export default function ProjectModal({ project, onClose }) {
  const [showDemo, setShowDemo] = useState(false);

  useEffect(() => {
    setShowDemo(false);
  }, [project?.title]);

  const live  = project.links?.live;
  const video = project.links?.video;
  const code  = project.links?.code;

  const yt = video ? getYouTubeEmbed(video) : null;
  const isFile = video ? isVideoFile(video) : false;
  const shouldShowDemo = (!live && video) || showDemo;

  const contribList = Array.isArray(project.contribution)
    ? project.contribution
    : project.contribution
    ? [project.contribution]
    : [];

  return (
    <div
      className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <div
        className="bg-white dark:bg-gray-900 max-w-2xl w-full max-h-[85vh] overflow-y-auto
                   rounded-lg shadow-lg p-6 relative border border-gray-200 dark:border-gray-800"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-3 right-4 text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white text-xl"
          onClick={onClose}
          aria-label="Close modal"
        >
          &times;
        </button>

        {project.image && (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-56 object-cover rounded mb-4"
          />
        )}

        <div className="flex items-start justify-between gap-3 mb-1">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{project.title}</h2>
          <span
            className={`shrink-0 text-xs rounded-full px-2 py-0.5 mt-1
              ${project.category === "group"
                ? "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-200"
                : "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-200"}`}
          >
            {project.category === "group" ? "Group" : "Personal"}
          </span>
        </div>

        {project.description && (
          <p className="text-gray-700 dark:text-gray-300 mb-4 whitespace-pre-line">
            {project.description}
          </p>
        )}

        {Array.isArray(project.tech) && project.tech.length > 0 && (
          <div className="mb-4">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Tech Stack</h3>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t, i) => (
                <span key={i} className="text-xs px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full">
                  {t}
                </span>
              ))}
            </div>
          </div>
        )}

        {contribList.length > 0 && (
          <div className="mb-4">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">My Contribution</h3>
            <ul className="space-y-1">
              {contribList.map((item, i) => (
                <li key={i} className="flex gap-2 text-gray-600 dark:text-gray-300 text-sm">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
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

            {video && !shouldShowDemo && (
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

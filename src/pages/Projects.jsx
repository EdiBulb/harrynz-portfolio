import React, { useEffect, useMemo, useState } from "react";

// projects 배열
const projects = [
  {
    title: "Intelligent Sports Management Platform (Ongoing)",
    image: "/project_images/CFTI_image.png",
    description:
      "The development of a culturally responsive sports management web platform using React, Django, and MySQL, with features like AI-based performance analysis and identity verification.",
    tech: ["React.js", "Django", "MySQL", "REST API", "Tailwind CSS", "Axios", "Agile"],
    contribution: [
      "Designed and implemented a scalable backend deployment architecture using Gunicorn + Nginx on a Linux-based VPS",
      "Configured systemd unit files for Gunicorn to manage application lifecycles and ensure automatic startup on system boot",
      "Mapped domain ({api.ptbsports.org}) using Namecheap DNS and implemented SSL encryption via Let’s Encrypt & Certbot.",
      "Authored a full Disaster Recovery Plan (DRP) with defined RTO/RPO metrics",
      "Set up and tested Prometheus + Grafana stack locally to monitor system health and simulate Slack alert notifications",
    ],
    category: "group", // ← 그룹 프로젝트
  },
  {
    title: "SeamlessStop – Intelligent Bus Stop Automation System",
    image: "/project_images/SeamlessStop_image.png",
    description:
      "ITS project using GPS to help passengers choose drop-off stops.",
    tech: ["React", "Node.js", "Django", "MySQL", "SUMO Simulation", "API Integration"],
    contribution: [
      "Designed UI","Participated as a FrontEnd developer",
    ],
    category: "group", // ← 그룹 프로젝트
  },
  {
    title: "Haerenga Travel Agency System",
    image: "/project_images/haerenga_image.png",
    description:
      "Built core user-facing and admin features for a web-based travel booking system using PHP and MySQL, with Agile methodology and cultural design principles in mind.",
    tech: ["PHP", "MySQL", "HTML/CSS/JavaScript", "XAMPP", "Apache", "Agile", "Git", "Trello"],
    contribution: "Participated as a Backend developer",
    category: "group", // ← 그룹 프로젝트
  },
  {
    title: "Memory Game",
    image: "/project_images/random_memory_game_image.png",
    description: "Built normal Memory Game with Algorithm.",
    tech: ["HTML/CSS/JavaScript", "Git"],
    contribution: "Developed from the scratch",
    category: "personal", // ← 개인 프로젝트
  },
  {
    title: "Flutter Chat App",
    image: "/project_images/chatapp.png",
    description: "Built Chat App with Flutter",
    tech: ["Flutter", "Firebase"],
    contribution: "Developed from the scratch",
    category: "personal", // ← 개인 프로젝트
  },
];

const Projects = () => {
  //(모달에 띄울) 선택된 프로젝트를 저장함
  const [selectedProject, setSelectedProject] = useState(null);

  // 해시(#projects-group / #projects-personal)로 기본 탭 결정
  // url에서 'projects-group'이 포함되어 있으면, tab의 기본값을 group으로 하고 아닌 경우 personal로 한다.
  const [tab, setTab] = useState(() =>
    window.location.hash.includes("projects-group") ? "group" : "personal"
  );

  // 탭 변경 시 해시도 동기화 (직접 공유 가능)
  const changeTab = (next) => {
  setTab(next);
  const hash = next === "group" ? "#projects-group" : "#projects-personal";
  const url = new URL(window.location.href);
  url.hash = hash;
  window.history.replaceState(null, "", url.toString());
  };

  // 브라우저 뒤/앞으로 가기 시 해시 변경 반영
  useEffect(() => {
    const onHash = () =>
      setTab(window.location.hash.includes("projects-group") ? "group" : "personal");
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  // 카테고리별 분리 (category 누락 시 personal로 처리)
  const normalized = useMemo(
    () => projects.map((p) => ({ ...p, category: p.category ?? "personal" })),
    []
  );
  const grouped = useMemo(
    () => ({
      group: normalized.filter((p) => p.category === "group"),
      personal: normalized.filter((p) => p.category !== "group"),
    }),
    [normalized]
  );
  const items = tab === "group" ? grouped.group : grouped.personal;

  return (
    <div className="max-w-5xl mx-auto p-4 mt-10">
      <h1 className="text-3xl font-bold mb-6 border-b-2 pb-2 border-blue-500">
        My Projects
      </h1>

      {/* 탭 */}
      <div className="inline-flex rounded-xl border border-gray-300 dark:border-gray-700 p-1 bg-white dark:bg-gray-800">
        
        <button
          type="button"
          onClick={() => changeTab("group")}
          className={`px-4 py-2 rounded-lg text-sm transition
            ${tab === "group"
              ? "bg-blue-600 text-white dark:bg-blue-500"
              : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"}`}
          aria-pressed={tab === "group"}
        >
          Group ({grouped.group.length})
        </button>
        <button
          type="button"
          onClick={() => changeTab("personal")}
          className={`px-4 py-2 rounded-lg text-sm transition
            ${tab === "personal"
              ? "bg-blue-600 text-white dark:bg-blue-500"
              : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"}`}
          aria-pressed={tab === "personal"}
        >
          Personal ({grouped.personal.length})
        </button>
      </div>

      {/* 카드 그리드 */}
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-6">
        {items.map((project, index) => (
          <div
            key={`${project.title}-${index}`}
            className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4 shadow-md hover:shadow-xl transition duration-300 cursor-pointer"
            onClick={() => setSelectedProject(project)}
          >
            {project.image && (
              <img
                src={project.image}
                alt={project.title}
                loading="lazy"
                className="w-full h-56 object-cover rounded-md"
              />
            )}
            <div className="mt-3 flex items-start justify-between gap-3">
              <h2 className="text-xl font-semibold text-blue-600 dark:text-blue-400">
                {project.title}
              </h2>
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
        ))}
      </div>

      {/* Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="bg-white dark:bg-gray-900 max-w-2xl w-full max-h-[80vh] overflow-y-auto rounded-lg shadow-lg p-6 relative border border-gray-200 dark:border-gray-800"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              className="absolute top-3 right-4 text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white text-xl"
              onClick={() => setSelectedProject(null)}
              aria-label="Close modal"
            >
              &times;
            </button>

            {/* Modal content */}
            {selectedProject.image && (
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-64 object-cover rounded"
              />
            )}

            <div className="mt-4 flex items-start justify-between gap-3">
              <h2 className="text-2xl font-bold">{selectedProject.title}</h2>
              <span
                className={`shrink-0 text-xs rounded-full px-2 py-0.5
                  ${selectedProject.category === "group"
                    ? "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-200"
                    : "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-200"}`}
              >
                {selectedProject.category === "group" ? "Group" : "Personal"}
              </span>
            </div>

            {selectedProject.description && (
              <p className="mt-3 text-gray-700 dark:text-gray-200 whitespace-pre-line">
                {selectedProject.description}
              </p>
            )}

            {Array.isArray(selectedProject.tech) && selectedProject.tech.length > 0 && (
              <>
                <h3 className="mt-4 font-semibold">Tech Stack</h3>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-300">
                  {selectedProject.tech.map((t, i) => (
                    <li key={i}>{t}</li>
                  ))}
                </ul>
              </>
            )}

            {/* ✅ 문자열/배열 모두 안전 처리 */}
            {(() => {
              const list = Array.isArray(selectedProject.contribution)
                ? selectedProject.contribution
                : selectedProject.contribution
                ? [selectedProject.contribution]
                : [];
              return list.length > 0 ? (
                <>
                  <h3 className="mt-4 font-semibold">My Contribution</h3>
                  <ul className="list-disc list-inside text-gray-600 dark:text-gray-300">
                    {list.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </>
              ) : null;
            })()}
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;

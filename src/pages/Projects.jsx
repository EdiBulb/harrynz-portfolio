import React, { useEffect, useMemo, useState } from "react";
import { projects as raw } from "../data/projects";
import Tabs from "../components/projects/Tabs";
import ProjectCard from "../components/projects/ProjectCard";
import ProjectModal from "../components/projects/ProjectModal";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  // 기본 탭: personal (URL에 #projects-group 있으면 group)
  const [tab, setTab] = useState(() =>
    window.location.hash.includes("projects-group") ? "group" : "personal"
  );

  // 탭 <-> 해시 동기화 (뒤로가기 기록 쌓지 않음)
  const changeTab = (next) => {
    setTab(next);
    const hash = next === "group" ? "#projects-group" : "#projects-personal";
    const url = new URL(window.location.href);
    url.hash = hash;
    window.history.replaceState(null, "", url.toString());
  };

  useEffect(() => {
    const onHash = () =>
      setTab(window.location.hash.includes("projects-group") ? "group" : "personal");
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  // 카테고리 정규화 + 그룹핑
  const normalized = useMemo(
    () => raw.map((p) => ({ ...p, category: p.category ?? "personal" })),
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

      <Tabs
        tab={tab}
        counts={{ group: grouped.group.length, personal: grouped.personal.length }}
        onChange={changeTab}
      />

      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-6">
        {items.map((project, i) => (
          <ProjectCard
            key={`${project.title}-${i}`}
            project={project}
            onOpen={setSelectedProject}
          />
        ))}
      </div>

      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </div>
  );
}

import React from "react";

const projects = [
  {
    title: "Random Menu App",
    description: "A Flutter app that helps you pick what to eat with a spinning wheel.",
    tech: ["Flutter", "Dart"],
    github: "https://github.com/your-username/random-menu-app",
  },
  {
    title: "Bus Stop App",
    description: "ITS project using GPS to help passengers choose drop-off stops.",
    tech: ["React", "Node.js", "Express"],
    github: "https://github.com/your-username/bus-stop-app",
  },
  {
    title: "YouTube Channel",
    description: "A personal content project sharing my journey in NZ.",
    tech: ["Video Editing", "KineMaster", "YouTube Studio"],
    github: "https://www.youtube.com/@harrynz",
  },
];

const Portfolio = () => {
  return (
    <div className="max-w-5xl mx-auto p-4 mt-10">
      <h1 className="text-3xl font-bold mb-6 border-b-2 pb-2 border-blue-500">
        My Projects
      </h1>

      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white border rounded-lg p-4 shadow-md hover:shadow-xl transition duration-300"
          >
            <h2 className="text-xl font-semibold text-blue-600">{project.title}</h2>
            <p className="text-gray-700 mt-2">{project.description}</p>
            <div className="text-sm text-gray-500 mt-2">
              Tech: {project.tech.join(", ")}
            </div>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline mt-3 inline-block"
            >
              View Project →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;

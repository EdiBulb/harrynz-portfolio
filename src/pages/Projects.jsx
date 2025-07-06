import React, { useState } from "react";

const projects = [
  {
    title: "Intelligent Sports Management Platform (Ongoing)",
    image: '/project_images/CFTI_image.png',
    description: "the development of a culturally responsive sports management web platform using React, Django, and MySQL, with features like AI-based performance analysis and identity verification",
    tech: ["React.js", "Django", "MySQL", "REST API", "Tailwind CSS", "Axios", "Agile"],
    contribution: "Participated as a DevOps developer"
    // github: "https://github.com/your-username/random-menu-app",
  },
  {
    title: "SeamlessStop – Intelligent Bus Stop Automation System",
    image: '/project_images/SeamlessStop_image.png',
    description: "ITS project using GPS to help passengers choose drop-off stops.",
    tech: ["React", "Node.js", "Django", "MySQL", "SUMO Simulation", "API Integration"],
    contribution: "Participated as a FrontEnd developer"

    // github: "https://github.com/your-username/bus-stop-app",
  },
  {
    title: "Haerenga Travel Agency System",
    image: '/project_images/haerenga_image.png',
    description: "Built core user-facing and admin features for a web-based travel booking system using PHP and MySQL, with Agile methodology and cultural design principles in mind",
    tech: ["PHP", "MySQL", "HTML/CSS/JavaScript", "XAMPP", "Apache", "Agile", "Git", "Trello"],
    contribution: "Participated as a Backend developer"
    // github: "https://github.com/your-username/bus-stop-app",
  },
  {
    title: "Memory Game",
    image: '/project_images/random_memory_game_image.png',
    description: "Built normal Memory Game with Algorithm",
    tech: ["HTML/CSS/JavaScript", "Git"],
    contribution: "Participated as a JS developer"
    // github: "https://edibulb.github.io/react-rockscissorpaper/",
  },
  
  
];

const Projects = () => {

  // modal setting
  const [selectedProject, setSelectedProject] = useState(null);


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
            onClick={() => setSelectedProject(project)}

          >
            <img src={project.image} alt={project.title} className="w-full h-56 object-cover rounded-md" />
            <h2 className="text-xl font-semibold text-blue-600 mt-3">{project.title}</h2>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={() => setSelectedProject(null)} // 배경 클릭 시 모달 닫기
        >
          <div
            className="bg-white max-w-2xl w-full rounded-lg shadow-lg p-6 relative"
            onClick={(e) => e.stopPropagation()} // 내부 클릭 시 닫힘 방지
          >
            {/* closs button */}
            <button
              className="absolute top-3 right-4 text-gray-600 hover:text-black text-xl"
              onClick={() => setSelectedProject(null)}
            >
              &times;
            </button>

            {/* content */}
            <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-64 object-cover rounded" />
            <h2 className="text-2xl font-bold mt-4">{selectedProject.title}</h2>
            <p className="mt-3 text-gray-700">{selectedProject.description}</p>

            <h3 className="mt-4 font-semibold">Tech Stack</h3>
            <ul className="list-disc list-inside text-gray-600">
              {selectedProject.tech.map((t, i) => (
                <li key={i}>{t}</li>
              ))}
            </ul>

            <h3 className="mt-4 font-semibold">My Contribution</h3>
            <p className="text-gray-700">{selectedProject.contribution}</p>
          </div>
        </div>
      )}



    </div>
  );
};

export default Projects;

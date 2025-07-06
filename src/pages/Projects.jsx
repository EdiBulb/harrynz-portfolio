import React from "react";

const projects = [
  {
    title: "Intelligent Sports Management Platform (Ongoing)",
    image: '/project_images/CFTI_image.png',
    description: "the development of a culturally responsive sports management web platform using React, Django, and MySQL, with features like AI-based performance analysis and identity verification",
    tech: ["React.js", "Django", "MySQL", "REST API", "Tailwind CSS", "Axios", "Agile"],
    // github: "https://github.com/your-username/random-menu-app",
  },
  {
    title: "SeamlessStop – Intelligent Bus Stop Automation System",
    image: '/project_images/SeamlessStop_image.png',
    description: "ITS project using GPS to help passengers choose drop-off stops.",
    tech: ["React", "Node.js", "Django", "MySQL", "SUMO Simulation", "API Integration"],
    // github: "https://github.com/your-username/bus-stop-app",
  },
  {
    title: "Haerenga Travel Agency System",
    image: '/project_images/haerenga_image.png',
    description: "Built core user-facing and admin features for a web-based travel booking system using PHP and MySQL, with Agile methodology and cultural design principles in mind",
    tech: ["PHP", "MySQL", "HTML/CSS/JavaScript", "XAMPP", "Apache", "Agile", "Git", "Trello"],
    // github: "https://github.com/your-username/bus-stop-app",
  },
  {
    title: "Memory Game",
    image: '/project_images/random_memory_game_image.png',
    description: "Built normal Memory Game with Algorithm",
    tech: ["HTML/CSS/JavaScript", "Git"],
    // github: "https://edibulb.github.io/react-rockscissorpaper/",
  },
  
  
];

const Projects = () => {
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

            <img src={project.image} alt={project.title} className="w-full h-56 object-cover" />

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

export default Projects;

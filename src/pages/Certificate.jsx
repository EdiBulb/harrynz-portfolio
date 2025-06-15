import React from "react";

const certificates = [
  {
    title: "The Complete Flutter Development Bootcamp with Dart, Udemy",
    provider: "Udemy",
    period: "2024.03 – 2024.06",
    image: "/certificates/flutter_udemy.png", // public 폴더 안에 위치
    description: "Built several Flutter apps including a Chating app and BMI Calculation app.",
    projects: [
      {
        name: "Chating App",
        link: "https://github.com/your-username/random-menu-app",
      },
      {
        name: "BMI Calculation App",
        link: "https://github.com/your-username/flutter-quiz-app",
      },
    ],
  },
  {
    title: "JavaScript Project: Build a Random Card Memory Game - 2025",
    provider: "Udemy",
    period: "2024.05 – 2024.06",
    image: "/certificates/JavaScript_udemy.png", // public 폴더 안에 위치
    description: "Built random Card Memory Game",
    projects: [
      {
        name: "Random Card Memory Game",
        link: "https://github.com/your-username/random-menu-app",
      },
      
    ],
  },
  {
    title: "The Ultimate React Course 2025: React, Next.js, Redux & More",
    provider: "Udemy",
    period: "2024.06 – 2024.06",
    image: "", // public 폴더 안에 위치
    description: "Built several apps including a quiz app and random menu app.",
    projects: [
      {
        name: "On going",
        link: "https://github.com/your-username/random-menu-app",
      },
      
    ],
  }
];

const Certificate = () => {
  return (
    <div className="max-w-5xl mx-auto p-4 mt-10">
      <h1 className="text-3xl font-bold mb-6 border-b-2 pb-2 border-blue-500">
        Certificates
      </h1>

      <div className="grid gap-6 md:grid-cols-2">
        {certificates.map((cert, index) => (
          <div
            key={index}
            className="bg-white border rounded-lg p-4 shadow-md hover:shadow-lg transition duration-300"
          >
            <img
              src={cert.image}
              alt={`${cert.title} certificate`}
              className="w-full h-48 object-contain mb-4"
            />
            <h2 className="text-xl font-semibold text-blue-600">{cert.title}</h2>
            <p className="text-gray-700">{cert.provider}</p>
            <p className="text-sm text-gray-500 italic mb-2">{cert.period}</p>
            <p className="text-gray-700 mb-2">{cert.description}</p>
            {cert.projects.length > 0 && (
              <div className="mt-2">
                <h3 className="text-sm font-semibold">Related Projects:</h3>
                <ul className="list-disc ml-5 mt-1">
                  {cert.projects.map((project, i) => (
                    <li key={i}>
                      <a
                        href={project.link}
                        className="text-blue-500 underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {project.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certificate;

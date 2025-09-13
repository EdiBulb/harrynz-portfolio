import React from "react";

const educationData = [
  {
    school: "Yoobee College of Creative Innovation",
    degree: "Master of Software Engineering",
    period: "2024 – 2025 (expected)",
    description:
      "Studying advanced software development, Quantum Computing, Data Analytics, Blockchain and Decentralised Digital Identity, Cloud Security, and Intelligent Transportation Systems.",
  },
  {
    school: "Hongik University (Korea)",
    degree: "Bachelor of Science in Software Convergence",
    period: "2016 – 2022",
    description:
      "Focused on software fundamentals, data structures, algorithms, and participated in coding competitions and exchange programs in China and Nepal.",
  },
];

const Education = () => {
  return (
    <div className="max-w-4xl mx-auto p-4 mt-10">
      <h1 className="text-3xl font-bold mb-6 border-b-2 pb-2 border-blue-500">
        Education
      </h1>

      <div className="space-y-6">
        {educationData.map((edu, index) => (
          <div
            key={index}
            className="bg-white p-5 rounded-lg shadow-md border-l-4 border-blue-400"
          >
            <h2 className="text-xl font-semibold text-blue-600">{edu.school}</h2>
            <p className="text-md text-gray-700 font-medium">{edu.degree}</p>
            <p className="text-sm text-gray-500 italic mb-2">{edu.period}</p>
            <p className="text-gray-700">{edu.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;

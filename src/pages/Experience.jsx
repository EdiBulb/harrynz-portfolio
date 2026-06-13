import React from "react";

const experiences = [
  {
    company: "Harmoney",
    role: "Software Engineer Intern",
    period: "Nov 2025 – Feb 2026",
    image: "/experience/harmoney.jpg",
    description: "Details coming soon.",
    contributions: [],
  },
];

const Experience = () => {
  return (
    <div className="mt-10">
      <h1 className="text-3xl font-bold mb-6 border-b-2 pb-2 border-blue-500 text-gray-900 dark:text-white">
        Work Experience
      </h1>

      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-md border-l-4 border-blue-400 overflow-hidden"
          >
            <div className="flex flex-col md:flex-row">
              {exp.image && (
                <div className="md:w-48 flex-shrink-0">
                  <img
                    src={exp.image}
                    alt={`${exp.company} workplace`}
                    className="w-full h-48 md:h-full object-cover"
                    onError={(e) => { e.target.style.display = "none"; }}
                  />
                </div>
              )}
              <div className="p-5 flex-1">
                <h2 className="text-xl font-semibold text-blue-600">{exp.company}</h2>
                <p className="text-md font-medium text-gray-800 dark:text-gray-200">{exp.role}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400 italic mb-3">{exp.period}</p>
                <p className="text-gray-700 dark:text-gray-300 mb-3">{exp.description}</p>
                {exp.contributions.length > 0 && (
                  <ul className="list-disc list-inside space-y-1">
                    {exp.contributions.map((item, i) => (
                      <li key={i} className="text-gray-700 dark:text-gray-300 text-sm">{item}</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;

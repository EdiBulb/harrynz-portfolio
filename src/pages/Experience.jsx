import React, { useState } from "react";

const experiences = [
  {
    company: "Harmoney",
    role: "Software Engineer Intern",
    period: "Nov 2025 – Feb 2026",
    image: "/experience/harmoney.jpg",
    description:
      "Worked as a Software Engineer Intern at Harmoney, a leading NZ/AU fintech company. Contributed to backend feature development in an Agile team alongside senior developers, testers, and product owners.",
    contributions: [
      "Participated in code review processes and implemented feedback from senior developers",
      "Worked alongside developers, testers, and product owners in an Agile team environment",
      "Delivered feature demonstrations to stakeholders with technical explanations",
      "Followed industry best practices for code organisation, error handling, and maintainability",
      "Collaborated in Agile development environment with proper documentation and testing standards",
      "Developed customer search functionality using TypeScript, NestJS, and Prisma ORM, improving support agent efficiency",
    ],
    keyContributions: [
      "Implemented C-number pattern recognition with regex validation and database optimisation, reducing search query time",
      "Built comprehensive Jest unit test suites with 95%+ code coverage, ensuring feature reliability",
      "Optimised database queries by replacing JOIN operations with direct lookups, improving performance",
      "Designed and implemented a role-based authorisation system (CANCEL_DISBURSAL_OFFICER role) for application cancellations at disbursement stage",
      "Reduced operational overhead by 100% — eliminated ~55 manual monthly database requests",
    ],
    tech: ["TypeScript", "NestJS", "Prisma ORM", "PostgreSQL", "Jest", "Agile"],
  },
];

function ExperienceModal({ exp, onClose }) {
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

        {exp.image && (
          <img
            src={exp.image}
            alt={exp.company}
            className="w-full h-48 object-cover rounded mb-4"
            onError={(e) => { e.target.style.display = "none"; }}
          />
        )}

        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{exp.company}</h2>
        <p className="text-md font-medium text-blue-600 dark:text-blue-400 mt-1">{exp.role}</p>
        <p className="text-sm text-gray-500 dark:text-gray-400 italic mb-4">{exp.period}</p>

        <p className="text-gray-700 dark:text-gray-300 mb-4">{exp.description}</p>

        {exp.tech?.length > 0 && (
          <div className="mb-4">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Tech Stack</h3>
            <div className="flex flex-wrap gap-2">
              {exp.tech.map((t, i) => (
                <span key={i} className="text-xs px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full">
                  {t}
                </span>
              ))}
            </div>
          </div>
        )}

        {exp.contributions?.length > 0 && (
          <div className="mb-4">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Responsibilities</h3>
            <ul className="space-y-1">
              {exp.contributions.map((item, i) => (
                <li key={i} className="flex gap-2 text-gray-600 dark:text-gray-300 text-sm">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}

        {exp.keyContributions?.length > 0 && (
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Key Contributions</h3>
            <ul className="space-y-1">
              {exp.keyContributions.map((item, i) => (
                <li key={i} className="flex gap-2 text-gray-600 dark:text-gray-300 text-sm">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-emerald-400 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

const Experience = () => {
  const [selected, setSelected] = useState(null);

  return (
    <div className="mt-10">
      <h1 className="text-3xl font-bold mb-6 border-b-2 pb-2 border-blue-500 text-gray-900 dark:text-white">
        Work Experience
      </h1>

      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-md border-l-4 border-blue-400 overflow-hidden
                       cursor-pointer hover:shadow-xl transition duration-300"
            onClick={() => setSelected(exp)}
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
                <h2 className="text-xl font-semibold text-blue-600 dark:text-blue-400">{exp.company}</h2>
                <p className="text-md font-medium text-gray-800 dark:text-gray-200">{exp.role}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400 italic mb-3">{exp.period}</p>
                <p className="text-gray-600 dark:text-gray-300 text-sm">{exp.description}</p>
                <p className="mt-3 text-xs text-blue-500 dark:text-blue-400">Click to see details →</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selected && (
        <ExperienceModal exp={selected} onClose={() => setSelected(null)} />
      )}
    </div>
  );
};

export default Experience;

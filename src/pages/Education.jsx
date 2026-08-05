import React from "react";
import { FaGraduationCap } from "react-icons/fa";
import Reveal from "../components/Reveal";

const educationData = [
  {
    school: "Yoobee College of Creative Innovation",
    degree: "Master of Software Engineering",
    period: "2024 – 2025",
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
    <div className="mt-10">
      <h1 className="text-3xl font-bold mb-6 border-b-2 pb-2 border-blue-500 text-gray-900 dark:text-white">
        Education
      </h1>

      <div>
        {educationData.map((edu, index) => (
          <Reveal key={index} delay={index * 100} className="flex gap-4 sm:gap-6">
            {/* 기간 배지 */}
            <div className="hidden sm:block w-24 shrink-0 pt-2 text-right">
              <span className="text-sm font-semibold text-blue-600 dark:text-blue-400">
                {edu.period}
              </span>
            </div>

            {/* 아이콘 도트 + 연결선 */}
            <div className="flex flex-col items-center shrink-0">
              <span className="z-10 flex items-center justify-center w-10 h-10 rounded-full bg-blue-500 text-white ring-4 ring-blue-100 dark:ring-blue-900/40">
                <FaGraduationCap size={18} />
              </span>
              {index < educationData.length - 1 && (
                <span className="w-0.5 flex-1 bg-blue-200 dark:bg-blue-900 my-1" />
              )}
            </div>

            {/* 내용 카드 */}
            <div className="flex-1 bg-white dark:bg-gray-800 p-5 rounded-lg shadow-md mb-6">
              <p className="sm:hidden text-sm font-semibold text-blue-600 dark:text-blue-400 mb-1">
                {edu.period}
              </p>
              <h2 className="text-xl font-semibold text-blue-600 dark:text-blue-400">{edu.school}</h2>
              <p className="text-md text-gray-800 dark:text-gray-100 font-semibold">{edu.degree}</p>
              <p className="text-gray-600 dark:text-gray-300 mt-2">{edu.description}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
};

export default Education;

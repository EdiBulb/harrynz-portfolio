import React from "react";
import Reveal from "../components/Reveal";

const certificates = [
  {
    title: "The Ultimate React Course 2025: React, Next.js, Redux & More",
    provider: "Udemy",
    period: "2025.06 – 2025.06",
    image: "/certificates/react_udemy.jpg", // public 폴더 안에 위치
    // description: "Built several apps including a quiz app and random menu app.",
  },
  {
    title: "JavaScript Project: Build a Random Card Memory Game - 2025",
    provider: "Udemy",
    period: "2025.05 – 2025.06",
    image: "/certificates/JavaScript_udemy.png", // public 폴더 안에 위치
    // description: "Built random Card Memory Game",
  },
  {
    title: "The Complete Flutter Development Bootcamp with Dart, Udemy",
    provider: "Udemy",
    period: "2025.03 – 2025.06",
    image: "/certificates/flutter_udemy.png", // public 폴더 안에 위치
    // description: "Built several Flutter apps including a Chating app and BMI Calculation app.",
  }
];

const Certificate = () => {
  return (
    <div className="mt-10">
      <h1 className="text-3xl font-bold mb-6 border-b-2 pb-2 border-blue-500 text-gray-900 dark:text-white">
        Certificates
      </h1>

      <div className="grid gap-6 md:grid-cols-2">
        {certificates.map((cert, index) => (
          <Reveal key={index} delay={index * 100}>
            <div className="bg-white dark:bg-gray-800 border dark:border-gray-700 rounded-lg p-4 shadow-md hover:shadow-lg transition duration-300">
              <img
                src={cert.image}
                alt={`${cert.title} certificate`}
                className="w-full h-48 object-contain mb-4"
              />
              <h2 className="text-xl font-semibold text-blue-600 dark:text-blue-400">{cert.title}</h2>
              <p className="text-gray-800 dark:text-gray-100 font-medium">{cert.provider}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400 italic mb-2">{cert.period}</p>
              <p className="text-gray-600 dark:text-gray-300 mb-2">{cert.description}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
};

export default Certificate;

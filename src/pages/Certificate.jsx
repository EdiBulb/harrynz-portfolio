import React from "react";
import Reveal from "../components/Reveal";
import InfoCard from "../components/InfoCard";

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
            <InfoCard
              image={cert.image}
              imageAlt={`${cert.title} certificate`}
              imageClassName="object-contain bg-white"
              title={cert.title}
              subtitle={cert.provider}
              meta={cert.period}
              description={cert.description}
            />
          </Reveal>
        ))}
      </div>
    </div>
  );
};

export default Certificate;

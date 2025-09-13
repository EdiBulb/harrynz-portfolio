import React from "react";

const certificates = [
  {
    title: "Google Generative AI Certificate (Ongoing)",
    provider: "Google Academy",
    period: "2025.09 – 2025.12",
    image: "/certificates/google academy certificate.png", // public 폴더 안에 위치
    // description: "Learning how to apply generative AI for real-world problem solving, covering core concepts, tools, and practical use cases.",
  },
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
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certificate;

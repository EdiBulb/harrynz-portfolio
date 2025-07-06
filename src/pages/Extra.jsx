import React from "react";

const activities = [
  {
    title: "Nepal Volunteer Trip",
    year: "2016",
    image: "/activities/harry_nepal.jpg",
    description:
      "Participated in a volunteer program in Nepal, teaching children and helping with community projects. This experience sparked my interest in social contribution.",
  },
  {
    title: "Exchange Student in China",
    year: "2019",
    image: "/activities/harry_china.png",
    description:
      "Studied in China as an exchange student. Improved my Chinese language skills and experienced cultural diversity.",
  },
  {
    title: "Working Holiday in New Zealand",
    year: "2023",
    image: "/activities/harry_working_holiday.jpg",
    description:
      "Moved to New Zealand through a working holiday visa. Gained valuable life experience and decided to study software engineering here.",
  },
  {
    title: "YouTube Channel",
    year: "2023",
    image: "/activities/harry_youtube.png",
    description:
      "Vloging my Life in New Zealand.",
  },
];

const Extra = () => {
  return (
    <div className="max-w-5xl mx-auto p-4 mt-10">
      <h1 className="text-3xl font-bold mb-6 border-b-2 pb-2 border-blue-500">
        Extra Activities
      </h1>

      <div className="grid gap-6 md:grid-cols-2">
        {activities.map((act, index) => (
          <div
            key={index}
            className="bg-white border rounded-lg shadow-md overflow-hidden hover:shadow-xl transition"
          >
            <img
              src={act.image}
              alt={act.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold text-blue-600">{act.title}</h2>
              <p className="text-sm text-gray-500 italic mb-2">{act.year}</p>
              <p className="text-gray-700">{act.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Extra;

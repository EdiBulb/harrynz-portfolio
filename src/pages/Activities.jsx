import React from "react";
import Reveal from "../components/Reveal";
import InfoCard from "../components/InfoCard";

const activities = [
  {
    title: "Trade Me THINK-A-THON",
    year: "2025",
    image: "/activities/harry_ThinkAThon.jpg",
    description:
      "Got 1st Place on THINK-A-THON",
  },
  {
    title: "Working as Sales assistant",
    year: "2024-2025",
    image: "/activities/harry_supersave.jpg",
    description:
      "Learned how to care customer and customer's perspective",
  },
  {
    title: "Working as Waiter in New Zealand",
    year: "2023-2024",
    image: "/activities/harry_cornwall.jpg",
    description:
      "Worked as waiter for more than one year",
  },
  {
    title: "Working Holiday in New Zealand",
    year: "2023-2024",
    image: "/activities/harry_working_holiday.jpg",
    description:
      "Moved to New Zealand through a working holiday visa. Gained valuable life experience and decided to study software engineering here.",
  },
  {
    title: "Exchange Student in China",
    year: "2019",
    image: "/activities/harry_china.png",
    description:
      "Studied in China as an exchange student. Improved my Chinese language skills and experienced cultural diversity.",
  },

  {
    title: "Nepal Volunteer Trip",
    year: "2016",
    image: "/activities/harry_nepal.jpg",
    description:
      "Participated in a volunteer program in Nepal, teaching children and helping with community projects. This experience sparked my interest in social contribution.",
  },
];

const Activity = () => {
  return (
    <div className="mt-10">
      <h1 className="text-3xl font-bold mb-6 border-b-2 pb-2 border-blue-500 text-gray-900 dark:text-white">
        Extra Activities
      </h1>

      <div className="grid gap-6 md:grid-cols-2">
        {activities.map((act, index) => (
          <Reveal key={index} delay={(index % 4) * 100}>
            <InfoCard
              image={act.image}
              imageAlt={act.title}
              imageClassName={act.image.includes("harry_ThinkAThon") ? "object-top" : ""}
              title={act.title}
              meta={act.year}
              description={act.description}
            />
          </Reveal>
        ))}
      </div>
    </div>
  );
};

export default Activity;

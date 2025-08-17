// projects 배열
export const projects = [
  {
    title: "Intelligent Sports Management Platform (Ongoing)",
    image: "/project_images/CFTI_image.png",
    description:
      "The development of a culturally responsive sports management web platform using React, Django, and MySQL, with features like AI-based performance analysis and identity verification.",
    tech: ["React.js", "Django", "MySQL", "REST API", "Tailwind CSS", "Axios", "Agile"],
    contribution: [
      "Designed and implemented a scalable backend deployment architecture using Gunicorn + Nginx on a Linux-based VPS",
      "Configured systemd unit files for Gunicorn to manage application lifecycles and ensure automatic startup on system boot",
      "Mapped domain ({api.ptbsports.org}) using Namecheap DNS and implemented SSL encryption via Let’s Encrypt & Certbot.",
      "Authored a full Disaster Recovery Plan (DRP) with defined RTO/RPO metrics",
      "Set up and tested Prometheus + Grafana stack locally to monitor system health and simulate Slack alert notifications",
    ],
    category: "group", // ← 그룹 프로젝트
    links: {
      // live: "https://your-live.example.com",
      video: "https://youtu.be/your-demo-video",
      // code: "https://github.com/you/repo",
    },
  },
  {
    title: "SeamlessStop – Intelligent Bus Stop Automation System",
    image: "/project_images/SeamlessStop_image.png",
    description:
      "ITS project using GPS to help passengers choose drop-off stops.",
    tech: ["React", "Node.js", "Django", "MySQL", "SUMO Simulation", "API Integration"],
    contribution: [
      "Designed UI","Participated as a FrontEnd developer",
    ],
    category: "group", // ← 그룹 프로젝트
    links: {
      // live: "https://your-live.example.com",
      video: "https://youtu.be/your-demo-video",
      // code: "https://github.com/you/repo",
    },
  },
  {
    title: "Haerenga Travel Agency System",
    image: "/project_images/haerenga_image.png",
    description:
      "Built core user-facing and admin features for a web-based travel booking system using PHP and MySQL, with Agile methodology and cultural design principles in mind.",
    tech: ["PHP", "MySQL", "HTML/CSS/JavaScript", "XAMPP", "Apache", "Agile", "Git", "Trello"],
    contribution: "Participated as a Backend developer",
    category: "group", // ← 그룹 프로젝트
    links: {
      // live: "https://your-live.example.com",
      video: "https://youtu.be/your-demo-video",
      // code: "https://github.com/you/repo",
    },
  },
  {
    title: "Memory Game",
    image: "/project_images/random_memory_game_image.png",
    description: "Built normal Memory Game with Algorithm.",
    tech: ["HTML/CSS/JavaScript", "Git"],
    contribution: "Developed from the scratch",
    category: "personal", // ← 개인 프로젝트
    links: {
      // live: "https://your-live.example.com",
      video: "https://youtu.be/your-demo-video",
      // code: "https://github.com/you/repo",
    },
  },
  {
    title: "Flutter Chat App",
    image: "/project_images/chatapp.png",
    description: "Built Chat App with Flutter",
    tech: ["Flutter", "Firebase"],
    contribution: "Developed from the scratch",
    category: "personal", // ← 개인 프로젝트
    links: {
      // live: "https://your-live.example.com",
      video: "https://youtu.be/your-demo-video",
      // code: "https://github.com/you/repo",
    },
  },
];

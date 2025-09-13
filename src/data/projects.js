// projects 배열
export const projects = [
  {
    title: "Beyond Vision (Hackathon Project)",
    image: "/project_images/hackathon.jpg",
    description:
      "Helping the visually impaired see beyond sight with AI and cultural inclusivity.",
    tech: ["Django", "Open AI"],
    contribution: [
      "Used Open AI API to turn images → text → speech by using Django",
      "Used business model canvas strategy",
    ],
    category: "group", // ← 그룹 프로젝트
    links: {
      // live: "https://basketball.clubfilipinotauranga.org/",
      video: "https://www.youtube.com/watch?v=ChcCAHhWSGo",
      // code: "https://github.com/you/repo",
    },
  },
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
      live: "https://basketball.clubfilipinotauranga.org/",
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
      // video: "https://youtu.be/your-demo-video",
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
      // video: "https://youtu.be/your-demo-video",
      // code: "https://github.com/you/repo",
    },
  },
  {
  title: "Blood Sugar AI Coach",
  image: "/project_images/Blood-Sugar-AI-Coach.jpeg",
  description: "An AI-powered web app that helps users log and analyze their blood sugar levels. Inspired by a family member who manually tracked her readings, this app enables easy logging, AI-generated feedback, and weekly summaries. It supports both real users and demo guests.",
  tech: ["React", "Tailwind CSS", "Node.js", "Express", "OpenAI API", "Netlify", "Render"],
  contribution: [
    "How to Use -> ID: guest, PS: demo1234",
    "Designed and developed a full-stack blood sugar logging platform with user login, role-based access (aunty vs guest), and real-time data storage.",
    "Integrated OpenAI API to provide contextual, personalized blood sugar feedback using fasting/post-meal timing.",
    "Implemented a weekly summary generator powered by AI, enabling users to understand long-term patterns and receive health insights.",
    "Deployed frontend to Netlify and backend to Render, managing environment variables securely across platforms.",
    "Added demo (guest) mode with restricted write access, allowing others to explore the app safely without real data submission."
  ],
  category: "personal",
  links: {
    live: "https://blood-sugar-ai-coach.netlify.app",  // ← 여기에 Netlify 주소 넣어줘!
    code: "https://github.com/EdiBulb/Blood-Sugar-AI-Coach-code-review",
  },
},

  {
    title: "Memory Game",
    image: "/project_images/random_memory_game_image.png",
    description: "A browser-based memory card game where players flip cards to find matching pairs within a limited number of attempts. The game features animated card flips, randomized layout, and visual feedback for wins and losses.",
    tech: ["HTML/CSS/JavaScript", "Git"],
    contribution:  [
      "Loaded card data dynamically from an external JSON file and duplicated it to create matching pairs.",
      "Randomized card order using the Fisher-Yates shuffle algorithm.",
      "Dynamically generated card elements and added them to the DOM efficiently using DocumentFragment.",
      "Managed game state with variables for flipped cards, remaining attempts, and match count.",
      
    ],
    category: "personal", // ← 개인 프로젝트
    links: {
      // live: "https://your-live.example.com",
      video: "https://www.youtube.com/watch?v=b0bwAUQNRH4",
      code: "https://github.com/EdiBulb/JS-memory-game",
    },
  },
  {
    title: "Flutter Chat App",
    image: "/project_images/chatapp.png",
    description: "This is a real-time chat application built with Flutter and Firebase, where users can sign up or log in with email, send and receive messages instantly through Firestore, and enjoy a clean UI with animations and reusable components.",
    tech: ["Flutter","Dart", "Firebase Authentication", "Cloud Firestore"],
    contribution:  [
      "Built a real‑time chat in Flutter using Cloud Firestore streams with server‑side timestamps and ordered queries; implemented a message composer and reversed timeline UI.",      
      "Implemented email/password auth (sign‑up, login, logout) with FirebaseAuth, loading overlays, and named‑route navigation across Welcome/Login/Register/Chat.",      
      "Designed message bubble components with author‑aware alignment/coloring and extracted reusable UI (e.g., RoundedButton) and shared styles in constants.dart.",
      "Added polish with Hero transitions, AnimatedTextKit, and ColorTween to improve perceived performance and brand feel.",
            
      
    ],
    category: "personal", // ← 개인 프로젝트
    links: {
      // live: "https://your-live.example.com",
      video: "https://www.youtube.com/shorts/RMTGYMcqs_s",
      code: "https://github.com/EdiBulb/flutter_chat_custom",
    },
  },
];

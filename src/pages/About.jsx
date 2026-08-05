import { FaGithub, FaLinkedin, FaInstagram, FaFileAlt } from "react-icons/fa";

const SKILLS = ["Full-Stack Development", "AI", "Problem Solving", "Communication"];

const About = () => {
  return (
    <section className="pt-24 pb-12 bg-gray-100 dark:bg-gray-800">
      <div className="px-6 md:px-10">
        <h1 className="text-3xl font-bold mb-6 border-b-2 pb-2 border-blue-500 text-gray-900 dark:text-white">
          About Me
        </h1>

        {/* 스킬 태그 */}
        <div className="flex flex-wrap gap-2 mb-6">
          {SKILLS.map((skill) => (
            <span
              key={skill}
              className="px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300"
            >
              {skill}
            </span>
          ))}
        </div>

        {/* 텍스트 소개 */}
        <div className="mb-6">
          <p className="text-lg leading-relaxed mb-3">
            I enjoy turning ideas into <span className="font-semibold text-blue-600 dark:text-blue-400 text-xl">products that people actually use</span>.
          </p>
          <p className="text-lg leading-relaxed mb-3">
            I'm a Software Engineer based in Auckland. During my internship at Harmoney, I gained hands-on experience building and improving production software within an Agile engineering team.
          </p>
          <p className="text-lg leading-relaxed mb-3">
            Outside of work, I built Roamer, a product that began with a simple problem and evolved through conversations with real users. That experience shaped how I work: <span className="font-semibold text-blue-600 dark:text-blue-400 text-xl">build fast, ask fast</span>, and improve through feedback rather than assumptions.
          </p>
          <p className="text-lg leading-relaxed mb-3">
            I love <span className="font-semibold text-blue-600 dark:text-blue-400 text-xl">communicating with people</span>, sharing what I'm building, what I'm learning, and getting feedback early and often.
          </p>
          <p className="text-lg leading-relaxed mb-3">
            I'm naturally curious, enjoy solving difficult problems, and explore how <span className="font-semibold text-blue-600 dark:text-blue-400 text-xl">AI</span> can help me learn faster and build better products.
          </p>
          <p className="text-lg leading-relaxed mb-3">
            I'm currently looking for <span className="font-semibold text-blue-600 dark:text-blue-400 text-xl">Graduate or Junior Software Engineering</span> opportunities where I can contribute, grow, and build meaningful products.
          </p>
          <p className="text-lg leading-relaxed font-semibold">
            Let's connect.
          </p>
          <p className="mt-4 text-lg italic text-gray-500 dark:text-gray-400">
            Outside of coding, I love traveling, video editing, and exploring new places.
          </p>
        </div>

        {/* 소셜 링크 버튼 */}
        <div className="flex gap-4 flex-wrap">
          <a
            href="https://www.instagram.com/harry.nomad.nz"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-gradient-to-tr from-pink-600 via-red-500 to-yellow-400 text-white rounded hover:opacity-90 transition"
            aria-label="Instagram profile (opens in a new tab)"
          >
            <FaInstagram size={20} />
            Instagram
          </a>
          <a
            href="https://www.linkedin.com/in/harrykangnz"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-500 transition"
            aria-label="LinkedIn profile (opens in a new tab)"
          >
            <FaLinkedin size={20} />
            LinkedIn
          </a>
          <a
            href="https://github.com/Edibulb"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded border border-gray-600 hover:bg-gray-700 dark:bg-gray-900 dark:border-gray-500 dark:hover:bg-gray-950 transition"
            aria-label="GitHub profile (opens in a new tab)"
          >
            <FaGithub size={20} />
            GitHub
          </a>
          <a
            href="/resume/Harry Kang 2026 CV_full stack.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-blue-700 text-white rounded hover:bg-blue-600 transition"
          >
            <FaFileAlt size={20} />
            View CV
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;

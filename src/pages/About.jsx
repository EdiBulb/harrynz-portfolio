import { useState } from "react";
import { FaGithub, FaLinkedin, FaChevronDown, FaChevronUp, FaFileAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import ContactForm from "../components/about/ContactForm";

const About = () => {
  // ✅ form 표시 여부 상태
  const [formVisible, setFormVisible] = useState(false);
  
  return (

    <section className="pt-24 pb-12 bg-gray-100 dark:bg-gray-800">
      <div className="px-6 md:px-10">
        <h1 className="text-3xl font-bold mb-6 border-b-2 pb-2 border-blue-500 text-gray-900 dark:text-white">
          About Me
        </h1>

        {/* 텍스트 소개 */}
        <div className="mb-6">
          <p className="text-lg leading-relaxed mb-3">
            I’m <span className="font-semibold text-blue-600 dark:text-blue-400 text-xl">Full-stack developer</span> with a strong interest in DevOps and Cloud technologies.
          </p>
          <p className="text-lg leading-relaxed mb-3">
            What excites me the most is creating <span className="font-semibold text-blue-600 dark:text-blue-400 text-xl">something meaningful</span>—building solutions that can be applied to real life and solve actual problems. I find great satisfaction in seeing my work make an impact.
          </p>
          <p className="text-lg leading-relaxed mb-3">
            I’m also <span className="font-semibold text-blue-600 dark:text-blue-400 text-xl">passionate about AI</span> and enjoy experimenting with it to build innovative projects. Beyond coding, I love staying curious about emerging technologies and keeping up with industry trends.
          </p>
          <p className="text-lg leading-relaxed">
            At the heart of it, my motivation comes from a belief that technology can make the world a <span className="font-semibold text-blue-600 dark:text-blue-400 text-xl">better place</span> and I want to <span className="font-semibold text-blue-600 dark:text-blue-400 text-xl">contribute to that future</span>.
          </p>
          <p className="mt-4 text-lg italic text-gray-500 dark:text-gray-400">
            Outside of coding, I love traveling, video editing, and exploring new places.
          </p>
        </div>

        {/* 소셜 링크 버튼 */}
        <div className="flex gap-4 flex-wrap">
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
            className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700 transition"
          >
            <FaGithub size={20} />
            GitHub
          </a>
          <button
            onClick={() => setFormVisible((prev) => !prev)}
            className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-500 transition"
          >
            <MdEmail size={20} />
            <span>Email</span>
            {formVisible ? <FaChevronUp size={16} /> : <FaChevronDown size={16} />}
          </button>
          <a
            href="/resume/Harry_Kang_Summer_Internship.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-blue-700 text-white rounded hover:bg-blue-600 transition"
          >
            <FaFileAlt size={20} />
            Download CV
          </a>
        </div>

        {/* ✅ formVisible 이 true일 때만 보여줌 */}
        {formVisible && (
          <div className="mt-6">
            <ContactForm />
          </div>
        )}
      </div>
    </section>

  
  );
};

export default About;

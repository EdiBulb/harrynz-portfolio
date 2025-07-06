import { FaGithub, FaYoutube } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const About = () => {
  return (

    <section className="pt-24 pb-12 bg-gray-100 dark:bg-gray-800">
      <div className="max-w-4xl mx-auto px-4">
      <h1 className="text-3xl font-bold mb-6 border-b-2 pb-2 border-blue-500">
        About Me
      </h1>

      <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
        

        {/* 텍스트 소개 */}
        <div>
          <p className="text-lg leading-relaxed">
            I'm <span className="font-semibold text-blue-600">Full-stack developer</span> living in New Zealand, passionate about building with React, Node.js, and DevOps tools. I love creating things that work
          </p>

          <p className="mt-4 text-lg">
            I believe that opportunities aren’t given, they’re created.
          </p>

          <p className="mt-4 text-lg italic text-gray-500">
            Outside of coding, I love traveling, video editing, and sharing my story on YouTube 🎥.
          </p>
        </div>
      </div>

      {/* 소셜 링크 버튼 */}
      <div className="mt-8 flex gap-4 flex-wrap justify-center md:justify-start">
        <a
          href="https://github.com/Edibulb"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700 transition"
        >
          <FaGithub size={20} />
          GitHub
        </a>
        <a
          href="mailto:gnsqud24@naver.com"
          className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-500 transition"
        >
          <MdEmail size={20} />
          Email
        </a>
        <a
          href="https://www.youtube.com/@HarryNomad"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-400 transition"
        >
          <FaYoutube size={20} />
          YouTube
        </a>
      </div>
    </div>
    </section>

  
  );
};

export default About;

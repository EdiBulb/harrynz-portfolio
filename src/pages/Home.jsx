import React from "react";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col-reverse md:flex-row items-center justify-center bg-gradient-to-br from-gray-900 to-black text-white px-6 md:px-20">
      {/* 텍스트 부분 */}
      <div className="flex-1 text-center md:text-left space-y-4">
        <h2 className="text-4xl font-bold">Hi There! <span className="text-2xl">👋</span></h2>
        <h1 className="text-4xl md:text-5xl font-bold text-blue-400 animate-fade">
          I'M HARRY, 
        </h1>
        <h3 className="text-xl md:text-2xl text-blue-300 animate-fade">
          Developer | Explorer | Creator
        </h3>

      </div>

      {/* image */}
      <div className="flex-1 mb-10 md:mb-0">
        <img
          src="/profile/Harry_coding_image.png"
          alt="Developer Illustration"
          className="w-72 md:w-96 object-contain rounded-full"
        />
      </div>
    </div>
  );
};

export default Home;

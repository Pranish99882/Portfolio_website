import React from "react";
import profile from "../assets/profilepic.jpg";
const Hero = () => {
  return (
    <div id="home" className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <h1 className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl">
              Pranish Bhagat
            </h1>
            <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent">
              Full Stack Developer
            </span>
            <p className="my-2 max-w-xl py-6 font-light tracking-tighter ">
              Hello, I'm a passionate full-stack developer with a knack for
              creating efficient and user-friendly web applications. With
              expertise in front-end and back-end technologies, I specialize in
              building seamless building seamless digital experiences. My goal
              is to leverage my expertise to create innovative solutions that
              drive business growth and deliver exceptional user experiences.
            </p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <img
              className="w-[200px] h-[200px] lg:w-[400px] lg:h-[400px] object-cover rounded-full "
              src={profile}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

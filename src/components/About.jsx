import React from "react";
import aboutImg from "../assets/about.jpg";
const About = () => {
  return (
    <div id="about" className="border-b border-neutral-900 pb-4">
      <h1 className="my-20 text-center text-4xl">
        About <span className="text-neurtral-500">Me</span>
      </h1>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex items-center justify-center">
            <img className="rounded-2xl" src={aboutImg} alt="about" />
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <div className="flex justify-center lg:justify-start">
            <p className="my-2 max-w-xl py-6 text-xl">
              Hi, I'm a dedicated full-stack developer with a strong focus on
              building robust and scalable web applications. I enjoy crafting
              dynamic, user-centered solutions by seamlessly integrating
              front-end and back-end technologies. With a passion for
              problem-solving and innovation, I aim to create applications that
              are not only functional but also visually engaging. My mission is
              to turn ideas into impactful digital products that deliver value
              and enhance user experiences.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

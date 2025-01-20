import React, { useState } from "react";
import { EXPERIENCES } from "../constants/Data";
import { FaBriefcase, FaArrowDown, FaArrowUp } from "react-icons/fa";

const Experience = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleDescription = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section
      id="experience"
      className="min-h-screen flex items-center justify-center"
    >
      <div className="w-full max-w-3xl px-6 py-8 text-center">
        <h2 className="text-4xl font-bold mb-8">Experience</h2>
        <div className="relative border-l-4 border-neutral-700 pl-6">
          {EXPERIENCES.map((exp, index) => (
            <div key={index} className="mb-8 relative">
              {/* Icon and Connector */}
              <div className="absolute -left-6 top-0 flex items-center justify-center w-10 h-10 bg-cyan-400 text-neutral-950 rounded-full shadow-lg">
                <FaBriefcase size={20} />
              </div>

              {/* Experience Content */}
              <div className="pl-6">
                <h3 className="text-2xl font-semibold text-cyan-300">
                  {exp.role}{" "}
                  <span className="text-neutral-400">@ {exp.company}</span>
                </h3>
                <p className="text-sm text-neutral-400 mt-1">{exp.year}</p>
                <p className="mt-4 text-neutral-300">
                  {expandedIndex === index
                    ? exp.description
                    : `${exp.description.slice(0, 100)}...`}
                </p>
                <button
                  onClick={() => toggleDescription(index)}
                  className="mt-4 inline-flex items-center text-sm text-cyan-400 hover:underline focus:outline-none"
                >
                  {expandedIndex === index ? "Read Less" : "Read More"}
                  {expandedIndex === index ? (
                    <FaArrowUp className="ml-2" />
                  ) : (
                    <FaArrowDown className="ml-2" />
                  )}
                </button>
                <div className="mt-4">
                  <h4 className="text-sm text-neutral-400 mb-2 uppercase tracking-wider">
                    Technologies Used:
                  </h4>
                  <ul className="flex flex-wrap gap-2 justify-center">
                    {exp.technologies.map((tech, techIndex) => (
                      <li
                        key={techIndex}
                        className="px-3 py-1 bg-neutral-700 rounded-full text-cyan-200 text-sm"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

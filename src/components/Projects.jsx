import React from "react";
import { PROJECTS } from "../constants/Data";

const Projects = () => {
  return (
    <section id="projects" className="py-12 text-neutral-300">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-8">Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, index) => (
            <div
              key={index}
              className="bg-neutral-800 rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl"
            >
              {/* Project Image */}
              <div
                className="h-48 bg-center"
                style={{ backgroundImage: `url(${project.image})` }}
              ></div>

              {/* Project Details */}
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-cyan-300 mb-4">
                  {project.title}
                </h3>
                <p className="text-neutral-400 mb-4">{project.description}</p>
                <h4 className="text-sm text-neutral-400 mb-2 uppercase tracking-wide">
                  Technologies Used
                </h4>
                <ul className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

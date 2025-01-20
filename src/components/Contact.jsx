import React from "react";
import { FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className=" px-8 text-neutral-300">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-cyan-400 text-center mb-8">
          Contact Me
        </h2>
        <p className="text-center text-neutral-400 mb-12">
          Feel free to reach out for collaborations, opportunities, or just to
          say hello!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Side: Contact Info */}
          <div className="flex flex-col items-start space-y-6 bg-transparent p-8 pt-16 rounded-3xl shadow-xl transform transition-all duration-300 hover:scale-105">
            <h3 className="text-2xl font-bold text-cyan-400 mb-4">
              Contact Info
            </h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-cyan-400">📧</span>
                <a
                  href="mailto:your-email@example.com"
                  className="hover:text-cyan-400 transition-all"
                >
                  pranish2002bhagat@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-cyan-400">📱</span>
                <span>+977-9862510607</span>
              </div>
              <div className="flex items-center gap-3">
                <FaLinkedin className="text-2xl text-cyan-400" />
                <a
                  href="https://www.linkedin.com/in/your-profile"
                  className="hover:text-cyan-400 transition-all"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn Profile
                </a>
              </div>
            </div>
          </div>

          {/* Right Side: Contact Form */}
          <div className="max-w-2xl mx-auto bg-neutral-800 p-8  rounded-3xl shadow-xl transform transition-all duration-300 hover:scale-105">
            <form action="#" method="POST" className="space-y-6">
              {/* Name Field */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-neutral-400"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter your name"
                  className="mt-2 w-full rounded-lg border border-neutral-700 bg-neutral-900 px-4 py-2 text-neutral-300 focus:border-cyan-400 focus:ring focus:ring-cyan-400 focus:outline-none transition-all"
                  required
                />
              </div>

              {/* Email Field */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-neutral-400"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  className="mt-2 w-full rounded-lg border border-neutral-700 bg-neutral-900 px-4 py-2 text-neutral-300 focus:border-cyan-400 focus:ring focus:ring-cyan-400 focus:outline-none transition-all"
                  required
                />
              </div>

              {/* Message Field */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-neutral-400"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  placeholder="Enter your message"
                  className="mt-2 w-full rounded-lg border border-neutral-700 bg-neutral-900 px-4 py-2 text-neutral-300 focus:border-cyan-400 focus:ring focus:ring-cyan-400 focus:outline-none transition-all"
                  required
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="text-center">
                <button
                  type="submit"
                  className="w-full rounded-lg bg-cyan-400 px-6 py-3 text-neutral-950 font-bold text-lg hover:bg-cyan-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all duration-200"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

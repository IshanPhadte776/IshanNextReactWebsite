import React from "react";
import { IoLogoJavascript } from "react-icons/io5";
import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3 } from "react-icons/di";
import { FaReact } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const TechnologyUsed = () => {
  return (
    <div className="py-16 bg-gray-900 w-full">
      <div className="w-full px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        <div className="flex flex-wrap justify-center gap-10 mb-8">
          <AiFillHtml5 className="text-7xl text-orange-500" title="HTML5" />
          <DiCss3 className="text-7xl text-indigo-400" title="Tailwind CSS" />
          <FaReact className="text-7xl text-primary-400" title="React" />
          <FaGithub className="text-7xl text-white" title="GitHub" />
        </div>
      </div>
      <footer className="mt-16 border-t border-gray-800">
        <div className="w-full px-4 sm:px-6 lg:px-8 py-8">
          <p className="text-center text-gray-400">
            © {new Date().getFullYear()} Ishan Phadte. This website was built using HTML5, Tailwind CSS, CSS3, React, and GitHub.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default TechnologyUsed;

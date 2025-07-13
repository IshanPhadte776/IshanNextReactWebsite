import React from "react";
import styles from "./technologyUsed.module.css";

import { IoLogoJavascript } from "react-icons/io5";
import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3 } from "react-icons/di";
import { FaReact } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

//Fais avec React, Next.js, Javascript, HTML5 , CSS et Github

const TechnologyUsed = (props) => {
  return (
<div className="py-16 bg-gray-900 w-full">
  <div className="w-full px-4 sm:px-6 lg:px-8">
    <div className="text-center">
      <h2 className="text-3xl font-display font-bold text-white sm:text-4xl">
        Technologies & Skills
      </h2>
      <p className="mt-4 text-lg text-gray-400">
        Built with modern web technologies for optimal performance and user experience
      </p>
    </div>

    <div className="mt-16">
      <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-4">
        <div className="flex flex-col items-center p-6 bg-gray-800/50 rounded-xl hover:bg-gray-800/70 transition-colors">
          <FaReact className="text-5xl text-primary-400 mb-4" />
          <h3 className="text-lg font-medium text-white">React</h3>
          <p className="mt-2 text-sm text-gray-400 text-center">Frontend Framework</p>
        </div>
        
        <div className="flex flex-col items-center p-6 bg-gray-800/50 rounded-xl hover:bg-gray-800/70 transition-colors">
          <IoLogoJavascript className="text-5xl text-yellow-400 mb-4" />
          <h3 className="text-lg font-medium text-white">JavaScript</h3>
          <p className="mt-2 text-sm text-gray-400 text-center">Programming Language</p>
        </div>
        
        <div className="flex flex-col items-center p-6 bg-gray-800/50 rounded-xl hover:bg-gray-800/70 transition-colors">
          <DiCss3 className="text-5xl text-blue-400 mb-4" />
          <h3 className="text-lg font-medium text-white">CSS3</h3>
          <p className="mt-2 text-sm text-gray-400 text-center">Styling & Layout</p>
        </div>
        
        <div className="flex flex-col items-center p-6 bg-gray-800/50 rounded-xl hover:bg-gray-800/70 transition-colors">
          <FaGithub className="text-5xl text-white mb-4" />
          <h3 className="text-lg font-medium text-white">GitHub</h3>
          <p className="mt-2 text-sm text-gray-400 text-center">Version Control</p>
        </div>
      </div>
    </div>
  </div>

  <footer className="mt-16 border-t border-gray-800">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <p className="text-center text-gray-400">
        © {new Date().getFullYear()} Ishan Phadte. All rights reserved.
      </p>
    </div>
  </footer>
</div>


  );
};

export default TechnologyUsed;

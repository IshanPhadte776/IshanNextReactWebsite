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
<div className="flex flex-col items-center justify-center">
<div className="my-4 w-full">
<h1 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-5xl text-center whitespace-nowrap overflow-hidden">
    {props.language === "English"
      ? "Fais avec React, Next.js, Javascript, TailwindCSS et GithubAPI "
      : "Created using React, Next.js, Javascript, TailwindCSS and GithubAPI"}
  </h1>

  <div className="flex justify-center mt-4">
  <FaReact className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl" />
  <IoLogoJavascript className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl" />
  <AiFillHtml5 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl" />
  <DiCss3 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl" />
  <FaGithub className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl" />
</div>


</div>


  <div className="w-full grainy-background bg-gray-300 p-2 text-center">
    <h3>
      {props.language === "English"
        ? "© Ishan Phadte Tous les droits sont réservés"
        : "© Ishan Phadte All rights reserved."
      }
    </h3>
  </div>
</div>


  );
};

export default TechnologyUsed;

import React, { useRef } from "react";
import styles from "./verticalComponent.module.css";
import jumpingLogo from "./images/ishanLogo.png";
import Image from "next/image";
import profilePicture from "./images/profilePicture.png";

import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import ToggleSlider from "./ToggleSlider";

const VerticalComponent = (props) => {
  const aboutRef = useRef(null);

  const scrollToAbout = () => {
    document.documentElement.scrollTop = 0;
  };

  return (
    <div className="fixed left-0 bottom-0 w-1/4 h-full bg-black flex flex-col items-center justify-between p-4">
      <div
        className={`${styles.jump} w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 xl:w-18 xl:h-18 2xl:w-20 2xl:h-20 3xl:w-22 3xl:h-22 4xl:w-24 4xl:h-24`}
      >
        <Image src={jumpingLogo} alt="Logo" />
      </div>
      <Image
        src={profilePicture}
        className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 xl:w-14 xl:h-14 2xl:w-16 2xl:h-16 3xl:w-18 3xl:h-18 4xl:w-20 4xl:h-20"
        alt="pfpPic"
      />
      <h1 className="text-base text-white sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl 3xl:text-5xl 4xl:text-6xl lg:min-w-lg xl:min-w-xl 2xl:min-w-2xl 3xl:min-w-3xl 4xl:min-w-4xl font-semibold">
        Ishan Phadte
      </h1>
      <h3
        className="text-xs text-gray-400 sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl 3xl:text-3xl 4xl:text-4xl mt-1 sm:mt-2 md:mt-3 lg:mt-4 xl:mt-5 2xl:mt-6 3xl:mt-7 4xl:mt-8 lg:min-w-lg xl:min-w-xl 2xl:min-w-2xl 3xl:min-w-3xl 4xl:min-w-4xl hover:text-white"
        ref={aboutRef}
      >
        B.Sc. Computer Science
      </h3>

      <a href="mailto:ishanphadte@gmail.com">
        <h3         className="text-xs text-gray-400 sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl 3xl:text-3xl 4xl:text-4xl mt-1 sm:mt-2 md:mt-3 lg:mt-4 xl:mt-5 2xl:mt-6 3xl:mt-7 4xl:mt-8 lg:min-w-lg xl:min-w-xl 2xl:min-w-2xl 3xl:min-w-3xl 4xl:min-w-4xl hover:text-white"
>
          IshanPhadte@gmail.com
        </h3>
      </a>
      <h3
        className="text-xs text-gray-400 sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl 3xl:text-3xl 4xl:text-4xl mt-1 sm:mt-2 md:mt-3 lg:mt-4 xl:mt-5 2xl:mt-6 3xl:mt-7 4xl:mt-8 lg:min-w-lg xl:min-w-xl 2xl:min-w-2xl 3xl:min-w-3xl 4xl:min-w-4xl hover:text-white"
        onClick={scrollToAbout}
      >
        About Me
      </h3>
      <a
        href="https://github.com/IshanPhadte776"
        target="_blank"
        rel="noopener noreferrer"
      >
        <h3 
        className="text-xs text-gray-400 sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl 3xl:text-3xl 4xl:text-4xl mt-1 sm:mt-2 md:mt-3 lg:mt-4 xl:mt-5 2xl:mt-6 3xl:mt-7 4xl:mt-8 lg:min-w-lg xl:min-w-xl 2xl:min-w-2xl 3xl:min-w-3xl 4xl:min-w-4xl hover:text-white" >
        Github
        </h3>
      </a>

      <h1 className="text-base text-gray-200 sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl 3xl:text-5xl 4xl:text-6xl lg:min-w-lg xl:min-w-xl 2xl:min-w-2xl 3xl:min-w-3xl 4xl:min-w-4xl font-semibold">
        Contact
      </h1>
      <div className="flex items-center justify-between space-x-4">
        <a
          href="https://github.com/IshanPhadte776/IshanPhadte776"
          className="flex-grow"
        >
          <FaGithub className="w-6 h-6 text-white" />
        </a>
        <a
          href="https://www.linkedin.com/in/ishan-phadte-7b50b2243/"
          className="flex-grow"
        >
          <FaLinkedinIn className="w-6 h-6 text-white" />
        </a>
        <a href="mailto:ishanphadte@gmail.com" className="flex-grow">
          <AiOutlineMail className="w-6 h-6 text-white" />
        </a>
      </div>

      <ToggleSlider
        language={props.language}
        onLanguageChange={props.onLanguageChange}
      />
    </div>
  );
};

export default VerticalComponent;

import React from "react";
import styles from "./Header.module.css";
import jumpingLogo from "./images/ishanLogo.png";
import emailIcon from "./images/email.png";
import Image from "next/image";

const Header = (props) => {
  return (
<nav className="fixed top-0 left-0 w-full flex items-center justify-between p-4 bg-white z-5">
  {/* This sets up a flex container with a row layout, aligns items vertically centered, justifies the content between the start and end, and applies padding and a white background. */}
  <div className="flex items-center">
    <div
      className={`${styles.jump} w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 xl:w-18 xl:h-18 2xl:w-20 2xl:h-20 3xl:w-22 3xl:h-22 4xl:w-24 4xl:h-24`}
    >
      {/* Sets Width and Height to different values based on breakpoints */}
      <Image src={jumpingLogo} alt="Logo" />
    </div>
    <h1 className="text-base lg:text-lg xl:text-xl 2xl:text-2xl 3xl:text-3xl 4xl:text-4xl lg:min-w-lg xl:min-w-xl 2xl:min-w-2xl 3xl:min-w-3xl 4xl:min-w-4xl font-bold">
      Ishan Phadte
    </h1>
  </div>
  <div className="flex items-center">
    <Image
      src={emailIcon}
      className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 xl:w-14 xl:h-14 2xl:w-16 2xl:h-16 3xl:w-18 3xl:h-18 4xl:w-20 4xl:h-20"
      alt="Email Icon"
    />{" "}
    <h1 className="text-base lg:text-lg xl:text-xl 2xl:text-2xl 3xl:text-3xl 4xl:text-4xl lg:min-w-lg xl:min-w-xl 2xl:min-w-2xl 3xl:min-w-3xl 4xl:min-w-4xl font-bold">
      IshanPhadte@gmail.com
    </h1>
  </div>
  <div className="flex items-center">

    <h1 className="text-base lg:text-lg xl:text-xl 2xl:text-2xl 3xl:text-3xl 4xl:text-4xl lg:min-w-lg xl:min-w-xl 2xl:min-w-2xl 3xl:min-w-3xl 4xl:min-w-4xl font-bold">
      Ottawa, Ontario
    </h1>
  </div>
  {/* <ToggleSlider
    language={props.language}
    onLanguageChange={props.onLanguageChange}
  /> */}
</nav>


  );
};

export default Header;

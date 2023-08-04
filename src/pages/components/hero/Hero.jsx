import React, { useEffect, useState } from "react";
import Image from "next/image";
import profilePic from "./profilePicture.png";
import backgroundGif from "./backgroundGif.gif";

function Hero() {
  const [screenSize, setScreenSize] = useState("");

  useEffect(() => {
    const handleMediaQueryChange = (event) => {
      if (event.matches) {
        setScreenSize(event.media);
      }
    };

    const mediaQuery = window.matchMedia(
      "(min-width: 768px) and (max-width: 1279px)"
    );
    mediaQuery.addListener(handleMediaQueryChange);
    setScreenSize(mediaQuery.media);

    return () => {
      mediaQuery.removeListener(handleMediaQueryChange);
    };
  }, [screenSize,setScreenSize]);

  return (
    <div className="relative">
      {/* <img
        src="https://media.giphy.com/media/BA8S1tDfyHOkU/giphy.gif"
        //src= {backgroundGif}

        alt="GIF"
        className="w-full h-auto aspect-w-1 aspect-h-1 filter brightness-50"
      /> */}

      <Image
      src= "https://media.giphy.com/media/BA8S1tDfyHOkU/giphy.gif"
      className="w-full h-auto aspect-w-1 aspect-h-1 filter brightness-50"
      width={1}
      height={1}
      alt = "backgroundImage"
      ></Image> 

      <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-center items-center text-white p-1">
        <div className="max-w-2xl mx-auto">
          {" "}
          {/* Adjusted max width */}
          <div className="flex justify-center">
            <Image
              src={profilePic}
              className="w-1/4 xs:w-1/5 sm:w-1/4 md:w-2/5 lg:w-3/5"
              alt="pfpPic"
            />
          </div>
          <h1 className="text-4xl font-bold text-center mt-1">Ishan Phadte</h1>
          <div className="text-lg text-justify">
            <div className="mb-2">
              <p>
                Hello, My name is Ishan Phadte. I am a 3rd-year Computer Science
                student at the University of Ottawa. I am a great software
                engineer because I possess exceptional problem-solving skills.
              </p>
            </div>
            <div className="mb-2">
              <p>
                I am specialized in Full-Stack Development and Cloud Computing.
                I have created various full-stack projects such as this React
                Website. I am also an AWS Certified Cloud Practitioner and have
                developed a Chatbot using various cloud services. Additionally,
                I have done freelancing work for a small business where I
                developed a website to display content and send email
                notifications.
              </p>
            </div>
            <div className="flex justify-center">
              <button
                className="bg-transparent border border-white rounded-full py-2 px-4 text-white hover:bg-white hover:text-gray-800 transition-colors duration-300 mx-auto"
                onClick={() =>
                  window.open(
                    "https://github.com/IshanPhadte776/IshanPhadte776/blob/main/IshanPhadteResume.pdf",
                    "_blank"
                  )
                }
              >
                Resume
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;

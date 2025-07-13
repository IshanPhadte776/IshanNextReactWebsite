import React, { useEffect, useState } from "react";
import Image from "next/image";
import profilePic from "./profilePicture.png";

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
  }, [screenSize, setScreenSize]);

  return (
    <div className="relative w-full">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/70 to-gray-900/90"></div>
      <div className="relative z-10 flex flex-col justify-center items-center text-white px-4 py-16 w-full">
        <div className="grid lg:grid-cols-[2fr,3fr] gap-12 items-center w-full">
          <div className="text-center lg:text-left space-y-8">
            <div className="flex justify-center lg:justify-start">
              <Image
                src={profilePic}
                className="w-48 h-48 rounded-full border-4 border-secondary-400/50 shadow-xl"
                alt="Profile Picture"
                priority
              />
            </div>
            <div className="space-y-4">
              <h1 className="text-5xl font-display font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-300 to-secondary-300">
                Ishan Phadte
              </h1>
              <p className="text-xl text-gray-300 font-medium">
                Full-Stack Developer • AWS Cloud Practitioner
              </p>
            </div>
            <div className="flex gap-4 justify-center lg:justify-start">
              <button
                onClick={() =>
                  window.open(
                    "https://github.com/IshanPhadte776/IshanPhadte776/blob/main/IshanPhadteResume.pdf",
                    "_blank"
                  )
                }
                className="bg-secondary-600 hover:bg-secondary-700 text-white font-medium py-2 px-6 rounded-lg transition-colors duration-200 shadow-lg shadow-secondary-600/25"
              >
                View Resume
              </button>
              <button
                onClick={() => (window.location.href = "mailto:ishanphadte@gmail.com")}
                className="bg-gray-800 hover:bg-gray-700 text-white font-medium py-2 px-6 rounded-lg transition-colors duration-200"
              >
                Contact Me
              </button>
            </div>
          </div>

          <div className="bg-gray-800/50 backdrop-blur rounded-2xl p-8 shadow-xl">
            <div className="space-y-6 text-gray-200">
              <p className="text-lg leading-relaxed">
                Hello! I'm a 3rd-year Computer Science student at the University of Ottawa with a passion for building innovative solutions. My expertise lies in Full-Stack Development and Cloud Computing.
              </p>
              <p className="text-lg leading-relaxed">
                I've developed multiple full-stack applications, including this React website, and hold an AWS Cloud Practitioner certification. My experience includes creating a sophisticated Chatbot using AWS services and freelancing for businesses to develop custom web solutions.
              </p>
              <div className="pt-4 border-t border-gray-700">
                <h3 className="text-primary-300 font-semibold mb-3">Technical Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {["React", "Next.js", "TypeScript", "Node.js", "AWS", "TailwindCSS", "Vercel (Hosting)"]
                    .map(skill => (
                    <span key={skill} className="px-3 py-1 bg-gray-700/50 rounded-full text-sm text-gray-300">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;

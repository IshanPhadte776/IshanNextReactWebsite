import React, { useEffect, useState } from "react";
import Image from "next/image";
import profilePic from "./profilePicture.png";
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaJava, FaPython, FaDocker, FaGithub, FaJenkins, FaAws, FaLinux } from "react-icons/fa";
import { SiJavascript, SiNextdotjs, SiSpring, SiMongodb, SiKubernetes, SiGithubactions, SiAzuredevops, SiGooglecloud, SiTerraform, SiCplusplus } from "react-icons/si";
import sqlIcon from '../../../../public/icons/sql.svg';
import mcpIcon from '../../../../public/icons/mcp.svg';
import aiIcon from '../../../../public/icons/ai.svg';

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
        <div className="flex flex-col items-center w-full gap-8">
          <div className="flex flex-col items-center space-y-4">
            <Image
              src={profilePic}
              className="w-48 h-48 rounded-full border-4 border-secondary-400/50 shadow-xl"
              alt="Profile Picture"
              priority
            />
            <h1 className="text-5xl font-display font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-300 to-secondary-300">
              Ishan Phadte
            </h1>
            <p className="text-xl text-gray-300 font-medium">
              Software Developer
            </p>
            <div className="flex gap-4 justify-center">
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

          {/* --- Technical Skills Section (Blown Up) --- */}
          <section className="relative w-full flex flex-col items-center justify-center py-20 md:py-28 bg-gradient-to-br from-primary-50 via-secondary-50 to-gray-100 rounded-3xl shadow-2xl border-2 border-primary-100/40 my-12">
            <h2 className="text-4xl md:text-5xl font-extrabold text-primary-700 mb-4 text-center drop-shadow-lg tracking-tight">Technical Skills</h2>
            <p className="text-lg md:text-xl text-gray-700 mb-10 text-center max-w-2xl mx-auto">A comprehensive overview of my core technical proficiencies, spanning frontend, backend, DevOps, cloud, and AI technologies.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-8 w-full max-w-6xl px-2 md:px-8">
              {/* Frontend */}
              <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center border border-primary-100/40">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-2xl">🎨</span>
                  <span className="font-bold text-primary-700 text-xl">Frontend</span>
                </div>
                <div className="flex flex-wrap gap-3 items-center justify-center">
                  <span className="flex items-center gap-2 px-4 py-2 bg-primary-50 text-primary-800 rounded-full text-base font-semibold shadow"><FaHtml5 className="text-2xl" /> HTML5</span>
                  <span className="flex items-center gap-2 px-4 py-2 bg-primary-50 text-primary-800 rounded-full text-base font-semibold shadow"><FaCss3Alt className="text-2xl" /> CSS</span>
                  <span className="flex items-center gap-2 px-4 py-2 bg-primary-50 text-primary-800 rounded-full text-base font-semibold shadow"><SiJavascript className="text-2xl" /> JavaScript</span>
                  <span className="flex items-center gap-2 px-4 py-2 bg-primary-50 text-primary-800 rounded-full text-base font-semibold shadow"><FaReact className="text-2xl" /> React</span>
                  <span className="flex items-center gap-2 px-4 py-2 bg-primary-50 text-primary-800 rounded-full text-base font-semibold shadow"><SiNextdotjs className="text-2xl" /> Next.js</span>
                </div>
              </div>
              {/* Backend */}
              <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center border border-secondary-100/40">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-2xl">🖥️</span>
                  <span className="font-bold text-secondary-700 text-xl">Backend</span>
                </div>
                <div className="flex flex-wrap gap-3 items-center justify-center">
                  <span className="flex items-center gap-2 px-4 py-2 bg-secondary-50 text-secondary-800 rounded-full text-base font-semibold shadow"><FaNodeJs className="text-2xl" /> Node.js</span>
                  <span className="flex items-center gap-2 px-4 py-2 bg-secondary-50 text-secondary-800 rounded-full text-base font-semibold shadow"><FaJava className="text-2xl" /> Java</span>
                  <span className="flex items-center gap-2 px-4 py-2 bg-secondary-50 text-secondary-800 rounded-full text-base font-semibold shadow"><SiSpring className="text-2xl" /> Spring</span>
                  <span className="flex items-center gap-2 px-4 py-2 bg-secondary-50 text-secondary-800 rounded-full text-base font-semibold shadow"><SiSpring className="text-2xl" /> Spring Boot</span>
                  <span className="flex items-center gap-2 px-4 py-2 bg-secondary-50 text-secondary-800 rounded-full textbase font-semibold shadow"><FaPython className="text-2xl" /> Python</span>
                  <span className="flex items-center gap-2 px-4 py-2 bg-secondary-50 text-secondary-800 rounded-full text-base font-semibold shadow"><SiCplusplus className="text-2xl" /> C++</span>
                  <span className="flex items-center gap-2 px-4 py-2 bg-secondary-50 text-secondary-800 rounded-full text-base font-semibold shadow"><Image src={sqlIcon} alt="SQL" width={28} height={28} /> SQL</span>
                  <span className="flex items-center gap-2 px-4 py-2 bg-secondary-50 text-secondary-800 rounded-full text-base font-semibold shadow"><SiMongodb className="text-2xl" /> MongoDB</span>
                </div>
              </div>
              {/* DevOps & Cloud */}
              <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center border border-gray-200">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-2xl">⚙️</span>
                  <span className="font-bold text-gray-700 text-xl">DevOps & Cloud</span>
                </div>
                <div className="flex flex-wrap gap-3 items-center justify-center">
                  <span className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-800 rounded-full text-base font-semibold shadow"><FaDocker className="text-2xl" /> Docker</span>
                  <span className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-800 rounded-full text-base font-semibold shadow"><SiKubernetes className="text-2xl" /> Kubernetes</span>
                  <span className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-800 rounded-full text-base font-semibold shadow"><FaGithub className="text-2xl" /> GitHub</span>
                  <span className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-800 rounded-full text-base font-semibold shadow"><FaJenkins className="text-2xl" /> Jenkins</span>
                  <span className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-800 rounded-full text-base font-semibold shadow"><SiGithubactions className="text-2xl" /> GitHub Actions</span>
                  <span className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-800 rounded-full text-base font-semibold shadow"><FaAws className="text-2xl" /> AWS</span>
                  <span className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-800 rounded-full text-base font-semibold shadow"><SiAzuredevops className="text-2xl" /> Azure</span>
                  <span className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-800 rounded-full text-base font-semibold shadow"><SiGooglecloud className="text-2xl" /> GCP</span>
                  <span className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-800 rounded-full text-base font-semibold shadow"><FaLinux className="text-2xl" /> Linux</span>
                  <span className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-800 rounded-full text-base font-semibold shadow"><SiTerraform className="text-2xl" /> Terraform</span>
                </div>
              </div>
              {/* AI & Other */}
              <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center border border-pink-200">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-2xl">🤖</span>
                  <span className="font-bold text-pink-700 text-xl">AI & Other</span>
                </div>
                <div className="flex flex-wrap gap-3 items-center justify-center">
                  <span className="flex items-center gap-2 px-4 py-2 bg-pink-50 text-pink-800 rounded-full text-base font-semibold shadow"><Image src={mcpIcon} alt="MCP Servers" width={28} height={28} /> MCP Servers</span>
                  <span className="flex items-center gap-2 px-4 py-2 bg-pink-50 text-pink-800 rounded-full text-base font-semibold shadow"><Image src={aiIcon} alt="AI Agents" width={28} height={28} /> AI Agents</span>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Hero;

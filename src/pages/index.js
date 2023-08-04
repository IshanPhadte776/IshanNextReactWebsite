import Head from "next/head";
import { useState, useEffect } from "react";
import { FaCaretUp } from "react-icons/fa";
import GithubRepos from "./components/github/GitHubRepos";
import TechnologyUsed from "./components/technology/TechnologyUsed";
import VerticalComponent from "./components/sideBar/VerticalComponent";
import axios from "axios";

import Hero from "./components/hero/Hero";

export async function getServerSideProps() {
  try {
    console.log("SSP")
    const response = await axios.get("https://api.github.com/users/IshanPhadte776/repos?sort=created&direction=desc"); // Use localhost with the port number
    const repos = response.data;
    return {
      props: { repos },
    };
  } catch (error) {
    console.error("Error fetching repositories:", error);
    return {
      props: { repos: [] }, // Return empty data or handle the error case as needed
    };
  }
}

// export async function getStaticProps() {
//   try {
//     console.log("Two");
//     const response = await axios.get("http://localhost:3000/api/repos");
//     const repos = response.data;
//     return {
//       props: { repos },
//     };
//   } catch (error) {
//     console.error("Error fetching repositories:", error);
//     return {
//       props: { repos: [] },
//     };
//   }
// }

export default function Home({repos}) {
  const [language, setLanguage] = useState("English");
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [loading, setLoading] = useState(true);

  const scrollToTop = () => {
    const scrollDuration = 500; // Duration of the scroll animation in milliseconds
    const easing = (t) => t * t * t; // Easing function for gradual acceleration
    let currentTime = 0;

    const animateScroll = () => {
      currentTime += 15; // Time increment for each interval
      const progress = currentTime / scrollDuration;
      const scrollStep = -window.scrollY * easing(progress);

      if (progress < 1) {
        window.scrollBy(0, scrollStep);
        requestAnimationFrame(animateScroll);
      } else {
        window.scrollTo(0, 0); // Scroll to the exact top when animation completes
      }
    };

    requestAnimationFrame(animateScroll);
  };

  const handleLanguageChange = (event) => {
    setLanguage(event);
    console.log(language);
  };

  const handleClick = (event) => {
    console.log(event.currentTarget.className);
  };

  useEffect(() => {
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth < 850);
    };

    window.addEventListener("resize", checkScreenSize);
    checkScreenSize();

    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);


  useEffect(() => {
    // Simulate loading delay for demonstration purposes
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Head>
        <title>Ishan React Website</title>
      </Head>

      {!isSmallScreen ? (
        <div className="min-h-screen grid grid-cols-4">
          <div className="col-span-1">
            <VerticalComponent
              language={language}
              onLanguageChange={handleLanguageChange}
            />
          </div>
          <div className="col-span-3">
            <Hero> </Hero>
            <span
              onClick={scrollToTop}
              className="fixed bottom-4 right-4 z-50 p-3 text-C8C8FA text-8xl hover:text-929BE5  hover:cursor-pointer transition-colors duration-300"
            >
              &#9650;
            </span>
            {!loading ? (
              <GithubRepos repos={repos} />
            ) : (
              <p>Loading repositories...</p>
            )}
            <TechnologyUsed language={language}></TechnologyUsed>
          </div>
        </div>
      ) : (
        <div className="min-h-screen">
          <Hero> </Hero>
          <span
            onClick={scrollToTop}
            className="fixed bottom-4 right-4 z-50 p-3 text-C8C8FA text-4xl hover:text-929BE5 hover:cursor-pointer transition-colors duration-300"
          >
            &#9650;
          </span>

              <TechnologyUsed language={language} />

        </div>
      )}
    </>
  );
}

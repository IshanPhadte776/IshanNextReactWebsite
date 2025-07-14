import Head from "next/head";
import { useState, useEffect } from "react";
import { FaCaretUp } from "react-icons/fa";
import GithubRepos from "./components/github/GitHubRepos";
import NewGithubSection from "./components/github/NewGithubSection";
import TechnologyUsed from "./components/technology/TechnologyUsed";
// import VerticalComponent from "./components/sideBar/VerticalComponent"; // Removed
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
  // Feature flag for new GitHub section
  const [showNewGithubSection] = useState(true); // Set to false to show old section

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

      <div className="min-h-screen w-full">
        <Hero />
        <button
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-white/80 backdrop-blur shadow-2xl border border-gray-200 hover:bg-primary-500 hover:text-white transition-all duration-300 group"
          style={{ boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)' }}
        >
          <span className="text-3xl text-primary-700 group-hover:text-white transition-colors duration-300">
            &#9650;
          </span>
        </button>
        {!loading ? (
          showNewGithubSection ? (
            <NewGithubSection />
          ) : (
            <GithubRepos repos={repos} />
          )
        ) : (
          <p>Loading repositories...</p>
        )}
        <TechnologyUsed language={language} />
      </div>

    </>
  );
}

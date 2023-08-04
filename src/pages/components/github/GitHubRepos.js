import React, { useEffect, useState  } from "react";
import axios from "axios";

import PieChart from "./PieChart";
import GithubStats from "./GithubStats";


const GithubRepos = (props) => {
   //const [repos, setRepos] = useState([]);
   const [loading, setLoading] = useState(false);

   const { repos } = props;


  const [expanded, setExpanded] = useState(false);
  const [searchLanguage, setSearchLanguage] = useState("");
  const [filterButtonClicked, setFilterButtonClicked] = useState(true);

  const [currentTime, setCurrentTime] = useState("");

  const [highlightedLanguage, setHighlightedLanguage] = useState("");
  const [numOfProjects, setNumOfProjects] = useState("");

  const [hoveredRepo, setHoveredRepo] = useState(null);

  if (!Array.isArray(repos)) {
    return <div>Loading repositories...</div>;
  }

  const convertDate = (dateString) => {
    const date = new Date(dateString);
    const options = { year: "numeric", month: "long", day: "numeric" };
    return date.toLocaleDateString("en-US", options);
  };



  // const fetchRepos = async () => {
  //   try {
  //     setLoading(true);
  //     const response = await axios.get(
  //       "https://api.github.com/users/IshanPhadte776/repos?sort=created&direction=desc"
  //     );
  //     setRepos(response.data);
  //   } catch (error) {
  //     console.error("Error fetching repositories:", error);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  // useEffect(() => {
  //   fetchRepos();
  // }, []);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       setLoading(true);
  //       const response = await axios.get("/api/repos");
  //       setRepos(response.data);
  //     } catch (error) {
  //       console.error("Error fetching repositories:", error);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };
  //   fetchData();
  // }, []);

  

  const toggleVisibility = () => {
    setExpanded(!expanded);
  };

  const handleLanguageChange = (event) => {
    setSearchLanguage(event.target.value);
  };

  const applyFilters = () => {
    setFilterButtonClicked(true);
  };

  const clearFilters = () => {
    setSearchLanguage("");
    setFilterButtonClicked(false);
  };

  let previousColor = null;

  const getRandomColor = (() => {
    const colors = ["#CFBFFF", "#8577E6", "#C8C8FA", "#929BE5", "#829EFA"];
    let count = 0;

    return () => {
      const color = colors[count % colors.length];
      count++;
      return color;
    };
  })();

  const languageCounts = repos.reduce((counts, repo) => {
    const { language } = repo;
    if (language) {
      counts[language] = (counts[language] || 0) + 1;
    }
    return counts;
  }, {});

  const data = Object.entries(languageCounts).map(([language, count]) => {
    return {
      label: language, // Language label
      value: count, // Count of repositories
      percentage: ((count / repos.length) * 100).toFixed(2), // Percentage of repositories
      color: getRandomColor(),
    };
  });

  const handleSliceHover = (language) => {
    setHighlightedLanguage(language);
    setNumOfProjects(data.find((item) => item.label === language).value);
  };


  const handleMouseEnter = (repoId) => {
    setHoveredRepo(repoId);
  };

  const handleMouseLeave = () => {
    setHoveredRepo(null);
  };

  // const filteredRepos = repos.filter(
  //   (repo) => repo.language === searchLanguage
  // );

  const filteredByLanguage = repos.filter(
    (repo) =>
      repo.language &&
      repo.language.toLowerCase().startsWith(searchLanguage.toLowerCase())
  );

  const filteredByRepoName = repos.filter((repo) =>
    repo.name.toLowerCase().includes(searchLanguage.toLowerCase())
  );

  const filteredByTopics = repos.filter((repo) =>
    repo.topics?.some((topic) =>
      topic.toLowerCase().includes(searchLanguage.toLowerCase())
    )
  );

  const displayRepos =
    filteredByLanguage.length > 0
      ? filteredByLanguage
      : filteredByRepoName.length > 0
      ? filteredByRepoName
      : filteredByTopics;

      function capitalizeFirstLetter(string) {
        const words = string.split(" ");
        const capitalizedWords = words.map((word) => {
          const capitalized = word.charAt(0).toUpperCase() + word.slice(1);
          return `#${capitalized}`;
        });
        return capitalizedWords.join(" ");
      }



      

  return (
    <div className=" rounded-md p-4 bg-gray-100 ">
      <div className="flex flex-row">
        <div className="w-3/5">
          <PieChart data={data} onSliceHover={handleSliceHover} />
        </div>

        <div className="flex flex-col w-2/5 pr-4">
          <div className="flex flex-col space-y-4">
            <div className="flex space-x-4">
              <h2 className="text-2xl font-bold">
                My GitHub Repositories
              </h2>
            </div>
            <div className="flex flex-col space-y-2">
              <GithubStats> </GithubStats>

              <h3>Language Highlighted: {highlightedLanguage}</h3>
              <h3> Number of Projects: {numOfProjects}</h3>
            </div>
          </div>
        </div>
      </div>

      <div className="flex h-12 px-6">
        <div className="flex justify-between w-full">
          <input
            type="text"
            value={searchLanguage}
            onChange={handleLanguageChange}
            placeholder="What are you interested in?"
            className="w-full px-3 py-2 border border-gray-300 rounded"
          />
          <div className="h-full flex-grow space-x-8">
            <button
              onClick={clearFilters}
              className="flex-grow h-full px-12 bg-gray-300 text-gray-700 rounded whitespace-nowrap"
            >
              Clear Filters
            </button>
          </div>
        </div>
      </div>

      <p>{currentTime}</p>

      <div className="mt-4">
        {loading ? (
          <p>Loading repositories...</p>
        ) : (
          <ul className="mt-4 space-y-4">
            {displayRepos.map((repo) => (
              <li
                key={repo.id}
                className={`flex items-start cursor-pointer rounded p-2 mt-2 border-4 transition-all duration-300 ${
                  repo.id === hoveredRepo
                    ? "border-CFBFFF shadow-lg"
                    : "border-gray-100"
                } mx-auto `}
                style={{ width: "60%" }} // Add this line to set the width
                onClick={() => window.open(repo.html_url, "_blank")}
                onMouseEnter={() => handleMouseEnter(repo.id)}
                onMouseLeave={handleMouseLeave}
              >
                <span className="mr-2">&#8226;</span>
                <div className="flex-1">
                  <h3 className="font-bold underline text-8677E6">
                    {repo.name}
                  </h3>
                  <div className="text-lg text-gray-800">
                    {repo.description}
                  </div>
                  <div className="text-md text-gray-700"> Repo Created: {convertDate(repo.created_at)}</div>
                  {repo.topics && repo.topics.length > 0 && (
                    <div className="ml-4">
                      <span className="text-lg text-gray-800 font-semibold">Topics: </span>
                      {repo.topics.map((topic, index) => (
                        <React.Fragment key={topic}>
                          {index > 0 && ", "}
                          {capitalizeFirstLetter(topic)}
                        </React.Fragment>
                      ))}
                    </div>
                  )}
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

// export async function getServerSideProps() {
//   try {
//     const response = await axios.get("/api/repos"); // Call the API route directly
//     const repos = response.data;
//     return {
//       props: { repos },
//     };
//   } catch (error) {
//     console.error("Error fetching repositories:", error);
//     return {
//       props: { repos: [] }, // Return empty data or handle the error case as needed
//     };
//   }
// }

// export async function getStaticProps() {
//   // This code will be executed at build time
//   console.log("Hello");

//   const response = await fetch("/api/githubRepos");
//   const data = await response.json();

//   console.log(data);

//   return {
//     props: {
//       data,
//     },
//   };
// }


// GithubRepos.getInitialProps = async () => {
//   try {
//     const response = await axios.get(
//       "https://api.github.com/users/IshanPhadte776/repos?sort=created&direction=desc"
//     );
//     const data = response.data;
//     console.log(data)
//     return { data };
//   } catch (error) {
//     console.error("Error fetching repositories:", error);
//     return { data: [] }; // Return empty data or handle the error case as needed
//   }
// };


export default GithubRepos;

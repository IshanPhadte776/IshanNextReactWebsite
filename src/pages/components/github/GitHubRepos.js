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
    <section className="w-full max-w-6xl mx-auto mt-12 px-2 md:px-6">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-2/5 flex flex-col items-center justify-center">
          <PieChart data={data} onSliceHover={handleSliceHover} />
          <div className="mt-4 text-center">
            <h3 className="text-lg font-semibold text-primary-700">{highlightedLanguage || 'Language Highlighted'}</h3>
            <p className="text-gray-600">{numOfProjects ? `${numOfProjects} Project(s)` : 'Number of Projects'}</p>
          </div>
        </div>
        <div className="md:w-3/5">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 gap-4">
            <h2 className="text-3xl font-bold text-gray-900 tracking-tight">GitHub Projects</h2>
            <div className="flex gap-2 w-full md:w-auto">
              <input
                type="text"
                value={searchLanguage}
                onChange={handleLanguageChange}
                placeholder="Search by language, name, or topic..."
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-primary-300 focus:outline-none bg-white text-gray-900"
              />
              <button
                onClick={clearFilters}
                className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors font-medium"
              >
                Clear
              </button>
            </div>
          </div>
          <div className="space-y-6">
            {loading ? (
              <p>Loading repositories...</p>
            ) : (
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {displayRepos.map((repo) => (
                  <li
                    key={repo.id}
                    className={`group cursor-pointer rounded-2xl border border-gray-200 bg-white/95 hover:shadow-2xl hover:border-primary-400 transition-all duration-300 p-6 flex flex-col gap-2 relative focus-within:ring-2 focus-within:ring-primary-300 ${repo.id === hoveredRepo ? 'ring-2 ring-primary-300' : ''}`}
                    onClick={() => window.open(repo.html_url, "_blank")}
                    onMouseEnter={() => handleMouseEnter(repo.id)}
                    onMouseLeave={handleMouseLeave}
                    tabIndex={0}
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <span className="block w-2 h-2 rounded-full bg-primary-400"></span>
                      <h3 className="font-bold text-lg text-primary-700 group-hover:underline truncate max-w-[70%]">{repo.name}</h3>
                      {repo.stargazers_count > 0 && (
                        <span className="ml-auto flex items-center gap-1 text-yellow-500 text-xs font-semibold bg-yellow-100 px-2 py-0.5 rounded-full">
                          ★ {repo.stargazers_count}
                        </span>
                      )}
                    </div>
                    <p className="text-gray-700 text-sm line-clamp-2 min-h-[2.5em]">{repo.description}</p>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {repo.topics && repo.topics.length > 0 && repo.topics.map((topic, index) => (
                        <span key={topic} className="bg-primary-50 text-primary-700 px-2 py-1 rounded-full text-xs font-medium border border-primary-100">{capitalizeFirstLetter(topic)}</span>
                      ))}
                    </div>
                    <div className="flex justify-between items-center mt-2 text-xs text-gray-500">
                      <span>{repo.language}</span>
                      <span>Created: {convertDate(repo.created_at)}</span>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </section>
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

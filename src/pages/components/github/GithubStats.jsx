// components/GithubStats.js
import { useEffect, useState } from 'react';
import axios from 'axios';

const GithubStats = () => {
  const [stats, setStats] = useState(null);

  const convertDate = (startDateString) => {
    const startDate = new Date(startDateString);
  
    const options = { year: "numeric", month: "long", day: "numeric" };
    const formattedStartDate = startDate.toLocaleDateString("en-US", options);
  
    return formattedStartDate;
  };

  // useEffect(() => {
  //   const fetchStats = async () => {
  //     try {
  //       const response = await axios.get('https://api.github.com/users/IshanPhadte776', {

  //       });
  //       setStats(response.data);
  //     } catch (error) {
  //       console.error('Error fetching GitHub stats:', error);
  //     }
  //   };

  //   fetchStats();
  // }, []);

  if (!stats) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <ul>
        <li>Created On: {convertDate(stats.created_at)}</li>
        <li>Followers: {stats.followers}</li>
        <li>Repositories: {stats.public_repos}</li>
      </ul>
    </div>
  );
};

export default GithubStats;

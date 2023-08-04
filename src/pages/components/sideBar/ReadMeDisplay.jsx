import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Markdown from 'markdown-to-jsx';

const ReadMeDisplay = ({ repoName }) => {
  const [readmeContent, setReadmeContent] = useState('');

  useEffect(() => {
    const fetchReadme = async () => {
      try {
        const response = await axios.get(
          `https://api.github.com/repos/your_username/${repoName}/contents/README.md`
        );
        const readmeBase64 = response.data.content;
        const decodedContent = atob(readmeBase64);
        setReadmeContent(decodedContent);
      } catch (error) {
        console.error(`Error fetching README for ${repoName}:`, error);
      }
    };

    fetchReadme();
  }, [repoName]);

  return (
    <div>
      <h2>{repoName}</h2>
      <Markdown>{readmeContent}</Markdown>
    </div>
  );
};

export default ReadMeDisplay;

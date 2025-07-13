// import axios from "axios";

// export default async function handler(req, res) {
//   try {
//     const response = await axios.get(
//       "https://api.github.com/users/IshanPhadte776/repos?sort=created&direction=desc"
//     );
//     const repos = response.data;
//     res.status(200).json(repos);
//   } catch (error) {
//     console.error("Error fetching repositories:", error);
//     res.status(500).json({ error: "Error fetching repositories" });
//   }
// }

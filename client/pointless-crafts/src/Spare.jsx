import React, { useState, useEffect } from "react";
import axios from "axios";

function Spare() {
//   const [hacks, setHacks] = useState([]);

//   useEffect(() => {
//     async function fetchHacks() {
//       try {
//         const response = await axios.get(
//           "https://pointless-crafts.onrender.com/api/data"
//         );
//         setHacks(response.data.allData);
//         console.log("response.data: ", response.data);
//       } catch (error) {
//         console.error("Error fetching hacks:", error);
//       }
//     }

//     fetchHacks();
//   }, []);

//   return (
//     <div>
//       <h1>Hacks</h1>
//       <ul>
//         {hacks.map((hack) => (
//           <li key={hack._id}>
//             <h2>{hack.title}</h2>
//             <p>Category: {hack.category}</p>
//             <p>Video URL: {hack.videoUrl}</p>
//             <p>Time Duration: {hack.timeDuration}</p>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
}

export default Spare;

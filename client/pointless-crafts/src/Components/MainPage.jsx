import { useState, useEffect } from "react";
import React from "react";
import axios from "axios";

export const MainPage = () => {
  const [hacks, setHacks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchHacks() {
      try {
        const response = await axios.get(
          "https://pointless-crafts.onrender.com/api/data"
        );
        setHacks(response.data.allData);
        setLoading(false); // Set loading state to false after data is fetched
        console.log("response.data: ", response.data);
      } catch (error) {
        console.error("Error fetching hacks:", error);
        setLoading(false); // Set loading state to false if there's an error
      }
    }

    fetchHacks();
  }, []);

  return (
    <>
      {loading ? (
        <div className="flex justify-center min-h-screen">
          <span className="loading loading-bars loading-lg"></span>
        </div>
      ) : (
        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-center mx-auto">
            {hacks.map((hack) => (
              <div key={hack._id}>
                <div className="card card-compact w-96 bg-base-100 shadow-xl">
                  <figure>
                    <iframe
                      width="560"
                      height="315"
                      src={hack.videoUrl}
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowfullscreen
                    ></iframe>
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">{hack.title}</h2>
                    <p>Category: {hack.category}</p>
                    <div className="card-actions justify-end">
                      <button className="btn btn-primary">See More</button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

import { useState, useEffect } from "react";
import React from "react";
import axios from "axios";

export const MainPage = () => {
  const [hacks, setHacks] = useState([]);

  useEffect(() => {
    async function fetchHacks() {
      try {
        const response = await axios.get(
          "https://pointless-crafts.onrender.com/api/data"
        );
        setHacks(response.data.allData);
        console.log("response.data: ", response.data);
      } catch (error) {
        console.error("Error fetching hacks:", error);
      }
    }

    fetchHacks();
  }, []);

  return (
    <>
      <h1>Hacks</h1>
      <div className="flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-center mx-auto">
          {hacks.map((hack) => (
            <div key={hack._id}>
              <div class="card card-compact w-96 bg-base-100 shadow-xl">
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
                <div class="card-body">
                  <h2 class="card-title">{hack.title}</h2>
                  <p>Category: {hack.category}</p>
                  <div class="card-actions justify-end">
                    <button class="btn btn-primary">See More</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

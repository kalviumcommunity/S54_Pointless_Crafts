import { useState, useEffect } from "react";
import React from "react";
import axios from "axios";

export const MainPage = () => {
  const [hacks, setHacks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [oneHack, setOneHack] = useState({});
  const [isEditing, setIsEditing] = useState(false);
  const [editedHack, setEditedHack] = useState({
    title: "",
    category: "",
    timeDuration: "",
    videoUrl: ""
  });

  useEffect(() => {
    async function fetchHacks() {
      try {
        const response = await axios.get(
          "https://pointless-crafts.onrender.com/api/data"
        );
        setHacks(response.data.allData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching hacks:", error);
        setLoading(false);
      }
    }

    fetchHacks();
  }, [editedHack]);

  async function getOneHack(id) {
    try {
      const response = await axios.get(
        `https://pointless-crafts.onrender.com/api/data/${id}`
      );
      const singleHack = response.data.singleHack;
      setOneHack(singleHack);
      setEditedHack({
        title: singleHack.title,
        category: singleHack.category,
        timeDuration: singleHack.timeDuration,
        videoUrl: singleHack.videoUrl, 
      });
    } catch (err) {
      console.log(err);
    }
  }

  async function editOneHack(id) {
    try {
      setIsEditing(!isEditing);

      console.log("id: ", id);
      const response = await axios.put(
        `https://pointless-crafts.onrender.com/api/data/${id}`,
        editedHack
      );
      console.log("Edited Hack:", response.data);
      // setOneHack(response.data.singleHack);
    } catch (err) {
      console.log(err);
    }
  }
  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditedHack((prevState) => ({
      ...prevState,
      [name]: value,
      videoUrl: oneHack.videoUrl, // Retain the original videoUrl value
    }));
  };

  async function deleteOneHack(id) {
    try {
      await axios.delete(
        `https://pointless-crafts.onrender.com/api/data/${id}`
      );
      // Update the UI by filtering out the deleted hack
      setHacks((prevHacks) => prevHacks.filter((hack) => hack._id !== id));
      console.log("Hack deleted successfully");
    } catch (err) {
      console.log(err);
    }
  }

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
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    ></iframe>
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">{hack.title}</h2>
                    <p>Category: {hack.category}</p>
                    <div className="card-actions justify-end">
                      <button
                        className="btn btn-primary"
                        onClick={(e) => {
                          document.getElementById("my_modal_3").showModal();
                          getOneHack(hack._id);
                        }}
                      >
                        See More
                      </button>
                      <dialog id="my_modal_3" className="modal">
                        <div className="modal-box md:min-w-96">
                          <form method="dialog">
                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                              ✕
                            </button>
                            <div className="card lg:card-side bg-base-100 shadow-xl">
                              <figure>
                                <iframe
                                  width="560"
                                  height="315"
                                  src={oneHack.videoUrl}
                                  title="YouTube video player"
                                  frameBorder="0"
                                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                  allowFullScreen
                                ></iframe>
                              </figure>
                              <div className="card-body">
                                <h2 className="card-title">
                                  {isEditing ? (
                                    <input
                                      placeholder="Enter new title"
                                      name="title"
                                      value={editedHack.title}
                                      onChange={handleEditChange}
                                    />
                                  ) : (
                                    oneHack.title
                                  )}
                                </h2>
                                {!isEditing && (
                                  <p>Category: {oneHack.category}</p>
                                )}
                                {!isEditing && (
                                  <p>Time Duration: {oneHack.timeDuration}</p>
                                )}
                                {isEditing && (
                                  <input
                                    placeholder="Enter new category"
                                    name="category"
                                    value={editedHack.category}
                                    onChange={handleEditChange}
                                  />
                                )}
                                {isEditing && (
                                  <input
                                    placeholder="Enter new time duration"
                                    name="timeDuration"
                                    value={editedHack.timeDuration}
                                    onChange={handleEditChange}
                                  />
                                )}
                                <div className="card-actions justify-end">
                                  <button
                                    className="btn btn-primary"
                                    onClick={(e) => {
                                      if (isEditing) {
                                        editOneHack(oneHack._id);
                                        getOneHack(oneHack._id)
                                      } else {
                                        e.preventDefault()
                                        setIsEditing(true);
                                        document.getElementById("my_modal_3").showModal();
                                      }
                                    }}
                                  >
                                    {isEditing ? "Save" : "Edit"}
                                  </button>
                                  <button
                                    className="btn btn-primary"
                                    onClick={() => deleteOneHack(oneHack._id)}
                                  >
                                    Delete
                                  </button>
                                </div>
                              </div>
                            </div>
                          </form>
                        </div>
                      </dialog>
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

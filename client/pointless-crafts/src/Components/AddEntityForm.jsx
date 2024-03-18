import React, { useState } from "react";
import axios from "axios";

export const AddEntityForm = () => {
  // State to manage form data
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    videoUrl: "",
    timeDuration: "",
  });

  // State to manage hack added message
  const [hackAddedMessage, setHackAddedMessage] = useState("");

  // Function to handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Send a POST request using Axios
      await axios.post(
        "https://pointless-crafts.onrender.com/api/data",
        formData
      );
      console.log("Form submitted successfully with data:", formData);
      // Reset form fields after submission
      setFormData({
        title: "",
        category: "",
        videoUrl: "",
        timeDuration: "",
      });
      // Set the success message
      setHackAddedMessage("Hack added successfully!");
      // Clear the success message after 3 seconds
      setTimeout(() => {
        setHackAddedMessage("");
      }, 3000);
    } catch (error) {
      console.error("Error submitting form:", error);
      // Set the error message
      setHackAddedMessage("Error adding hack. Please try again.");
    }
  };

  // Function to handle form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen min-w-screen py-8">
      <h2 className="text-4xl">Add Your Favorite Hacks</h2>
      {hackAddedMessage && <p>{hackAddedMessage}</p>}
      <form onSubmit={handleSubmit}>
        <div className="py-4">
          <label>Title:</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <div className="py-4">
          <label>Category:</label>
          <input
            type="text"
            name="category"
            value={formData.category}
            onChange={handleChange}
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <div className="py-4">
          <label>Video URL:</label>
          <input
            type="text"
            name="videoUrl"
            value={formData.videoUrl}
            onChange={handleChange}
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <div className="py-4">
          <label>Time Duration:</label>
          <input
            type="text"
            name="timeDuration"
            value={formData.timeDuration}
            onChange={handleChange}
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <button className="btn btn-secondary">Add Data</button>
      </form>
    </div>
  );
};

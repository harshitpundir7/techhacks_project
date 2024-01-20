import React from "react";
import { useState } from "react";
import Navbar from "../components/Navbar";
import Cookies from "js-cookie";
const CreateBounty = () => {
  const [bounties, setBounties] = useState([]);
  function handleChange(e) {
    setBounties((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  }
  function handleSubmit() {
    const accessToken = Cookies.get("accessToken");
    console.log(bounties);
    fetch("http://localhost:8888/bounty/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`, // Add access token to the Authorization header
      },
      body: JSON.stringify(bounties),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.success) {
          alert("Bounty Created Successfully! id: " + res.id);
        }
      });
  }
  return (
    <div>
      <Navbar />
      <div className="flex items-center justify-center h-screen bg-purple-200">
        <div
          style={{ width: "450px" }}
          className=" mx-auto p-8 bg-purple-100 shadow-lg rounded-3xl"
        >
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Create Bounty
          </h2>

          <div className="mb-4">
            <label
              htmlFor="title"
              className="block text-gray-800 font-semibold mb-2"
            >
              Bounty Title
            </label>
            <input
              type="text"
              name="title"
              onChange={handleChange}
              placeholder="Enter title of Bounty"
              className="w-full border border-gray-300 p-3 rounded-2xl focus:outline-none focus:border-blue-500 transition duration-300"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="price"
              className="block text-gray-800 font-semibold mb-2"
            >
              Bounty Price (USD)
            </label>
            <input
              type="number"
              name="price"
              onChange={handleChange}
              placeholder="Enter Bounty Price in USD"
              className="w-full border border-gray-300 p-3 rounded-2xl focus:outline-none focus:border-blue-500 transition duration-300"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="description"
              className="block text-gray-800 font-semibold mb-2"
            >
              Description
            </label>
            <textarea
              type="textarea"
              name="description"
              onChange={handleChange}
              placeholder="Description"
              className="w-full border border-gray-300 p-3 rounded-2xl focus:outline-none focus:border-blue-500 transition duration-300"
            ></textarea>
          </div>

          <div className="mb-4">
            <label
              htmlFor="issueLink"
              className="block text-gray-800 font-semibold mb-2"
            >
              Issue URL
            </label>
            <input
              type="text"
              name="issueLink"
              onChange={handleChange}
              placeholder="Enter Issue Url"
              className="w-full border border-gray-300 p-3 rounded-2xl focus:outline-none focus:border-blue-500 transition duration-300"
            />
          </div>

          <button
            onClick={handleSubmit}
            className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue transition duration-300"
          >
            Create Bounty
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateBounty;

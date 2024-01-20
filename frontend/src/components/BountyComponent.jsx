import React from "react";

const BountyComponent = ({ title, description, status, createdBy, price }) => {
  return (
    <div className="">
      <div
        className={
          "bg-purple-50 p-4 rounded-md shadow-md transform hover:scale-105 transition-transform duration-300 ease-in-out animate-fadeIn animate-delay-${index} outline-none focus:outline-white rounded-3xl mx-16 my-5"
        }
      >
        <div className="flex justify-between">
          <h2 className="text-4xl font-bold mb-2 float-left text-purple-500">
            ${price}
          </h2>
          <p className="text-gray-600 mb-1 float-right bg-blue-300 w-16 text-center rounded-2xl h-7 mt-3">
            • {status}
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-1">{title}</h3>
          <p className="text-gray-700 mb-1 text-lg">{description}</p>
          <p className="text-sm text-gray-400">{createdBy}</p>
        </div>
      </div>
    </div>
  );
};

export default BountyComponent;

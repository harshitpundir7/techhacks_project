import React, { useEffect } from "react";

const Application = ({ applicants }) => {
  const AppliArray = applicants.Applications;
  console.log(AppliArray);
  if (AppliArray.length === 0) return <p>No Applications yet</p>;
  else {
    return (
      <>
        <div>
          <h1>Hi Bro</h1>
          {AppliArray.map((state, index) => (
            <div key={index}>
              <h2>{state.user}</h2>
              <h3>{state.description}</h3>
            </div>
          ))}
        </div>
      </>
    );
  }
};

export default Application;

import React, { useEffect } from "react";

const Application = ({ applicants }) => {
  const AppliArray = applicants.Applications;
  if (AppliArray.length === 0) return <p>No Applications yet</p>;
  else {
    return (
      <>
        <div>
          <h1>Hi Bro</h1>
          {AppliArray.map((state, index) => (
            <div key={index}>
              <h2>{state.User}</h2>
              <h3>{state.Message}</h3>
            </div>
          ))}
        </div>
      </>
    );
  }
};

export default Application;

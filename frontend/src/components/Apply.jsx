import React, { useState } from "react";
import Modal from "react-modal";
import Cokkie from "js-cookie";

const Apply = ({ id }) => {
  const [applicant, setApplicant] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(true);
  const accessToken = Cokkie.get("accessToken");

  function handleSubmit(e) {
    setIsModalOpen(false);
    e.preventDefault();
    fetch("http://localhost:8888/bounty/apply", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
        id,
      },
      body: JSON.stringify({ applicant }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.status === 200) {
          alert("Application sent!");
        }
      });
  }

  function handleChange(e) {
    console.log(applicant);
    setApplicant((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  }

  return (
    <>
      <div>
        <Modal
          isOpen={isModalOpen}
          onRequestClose={() => setIsModalOpen(false)}
        >
          <h2>Apply to work on Bounty</h2>
          <input
            type="text"
            onChange={handleChange}
            name="description"
            placeholder="Explain"
          />
          <button onClick={handleSubmit}>Send Application</button>
        </Modal>
      </div>
    </>
  );
};

export default Apply;

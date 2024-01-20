import { useEffect } from "react";
import Navbar from "../components/Navbar";
import { useState } from "react";
import BountyComponent from "../components/BountyComponent";

function Dashboard() {
  // Assuming you will fetch user data from an API
  // const [user, setUser] = useState([]);
  // useEffect(() => {
  //   fetch("http://localhost:XXXX", {
  //     method: "GET",
  //     headers: {
  //       Authorization: `Bearer ${localStorage.getItem("token")}`,
  //     },
  //   })
  //     .then((response) => response.json())
  //     .then((data) => setUser(data));
  // }, []);

  // Sample user data for demonstration
  const user = [
    {
      name: "John Doe",
      email: "john.doe@example.com",
      bounties: [
        {
          title: "Bounty 1",
          description: "This is the first bounty",
          status: "open",
          createdBy: "John Doe",
          price: 100,
        },
        {
          title: "Bounty 2",
          description: "This is the second bounty",
          status: "closed",
          createdBy: "John Doe",
          price: 150,
        },
        {
          title: "Bounty 3",
          description: "This is the third bounty",
          status: "open",
          createdBy: "John Doe",
          price: 200,
        },
        {
          title: "Bounty 4",
          description: "This is the fourth bounty",
          status: "open",
          createdBy: "Jane Smith",
          price: 120,
        },
        // ... More bounty objects
      ],
    },
    {
      name: "Jane Smith",
      email: "jane.smith@example.com",
      bounties: [
        {
          title: "Bounty 4",
          description: "This is the fourth bounty",
          status: "open",
          createdBy: "Jane Smith",
          price: 120,
        },
        {
          title: "Bounty 5",
          description: "This is the fifth bounty",
          status: "closed",
          createdBy: "Jane Smith",
          price: 180,
        },
      ],
    },
    // Add more fake users if needed
  ];
    // ... More user objects

  return (
    <>
      <Navbar />
      <div className="flex flex-col md:flex-row mt-16 justify-center items-center bg-purple-200 rounded-3xl">
        <div className="md:w-1/4 p-4 bg-purple-100 rounded-3xl mx-8 ">
          <div className="bg-purple-50 h-64 shadow-md rounded-3xl p-4 text-center">
            <img
              className="h-24 w-24 transform hover:scale-125 transition-transform duration-400 ease-in-out animate-fadeIn animate-delay-${index} outline-none rounded-full mx-auto mb-2"
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Profile"
            />
            <h1 className="text-3xl text-purple-900 font-bold mb-2 transform hover:scale-125 transition-transform duration-400 ease-in-out animate-fadeIn animate-delay-${index} cursor-pointer">{user.length > 0 ? user[0].name : "Name"}</h1>
            <p className="text-lg text-purple-600 mb-2 transform hover:scale-125 transition-transform duration-400 ease-in-out animate-fadeIn animate-delay-${index} cursor-pointer overflow-hidden">Email: {user.length > 0 ? user[0].email : "Email"}</p>
          </div>
        </div>
        <div className="md:w-3/4 p-4 rounded-3xl">
          <div className="bg-white shadow-md rounded-3xl p-4">
            {user.length > 0 &&
              user[0].bounties.map((bounty, index) => (
                <BountyComponent
                  key={index}
                  title={bounty.title}
                  description={bounty.description}
                  status={bounty.status}
                  createdBy={bounty.createdBy}
                  price={bounty.price}
                />
              ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;

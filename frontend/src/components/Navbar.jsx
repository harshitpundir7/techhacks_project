import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
function Navbar() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="p-3 bg-white shadow md:flex md:items-center md:justify-between">
        <div className="flex justify-between items-center">
          <span className="text-lg font-[Poppins] cursor-pointer">
            <img
              className="h-8 inline"
              src="https://tailwindcss.com/_next/static/media/social-square.b622e290e82093c36cca57092ffe494f.jpg"
              alt=""
            />
            techacks
          </span>
          <span className="text-2xl cursor-pointer mx-2 md:hidden block">
            <ion-icon name="menu" onClick={toggleMenu} />
          </span>
        </div>
        <ul
          className={
            "md:flex md:items-center z-[-1] md:z-auto md:static absolute bg-white w-full left-0 md:w-auto md:py-0 py-2 md:pl-0 pl-4 md:opacity-100 ${isMenuOpen ? 'opacity-100 top-0' : 'opacity-0 top-[-400px]'} overflow-y-auto max-h-[300px] transition-all ease-in duration-500"
          }
        >
          <li className="mx-2 my-4 md:my-0">
            <span
              onClick={() => navigate("/Dashboard")}
              className="text-sm hover:text-cyan-500 cursor-pointer duration-500"
            >
              Dashboard
            </span>
          </li>
          <li className="mx-2 my-4 md:my-0">
            <span
              onClick={() => navigate("/home")}
              className="text-sm cursor-pointer hover:text-cyan-500 duration-500"
            >
              Bounties
            </span>
          </li>
          <button
            onClick={() => navigate("/bountyCreate")}
            className="bg-cyan-400 text-white font-[Poppins] duration-500 px-4 py-1 mx-2 hover:bg-cyan-500 rounded"
          >
            Add Bounty!
          </button>
          <h2 className="" />
        </ul>
      </nav>
    </>
  );
}

export default Navbar;

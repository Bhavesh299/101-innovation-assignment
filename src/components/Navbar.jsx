import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false) ;
  const navigate = useNavigate();
  
  return (
    <div className="flex justify-between bg-gray-500 text-white py-5">
      <div className="ml-5">101 INNOVATION</div>
      <div className="flex justify-evenly md:hidden">
        <div className="px-6 cursor-pointer" onClick={() => {
              navigate(`./`);
            }}>Home</div>
        <div className="px-6">Sign Up</div>
        <div className="px-6">Login</div>
      </div>
      <svg
        onClick={() => {
          setIsOpen(!isOpen);
        }}
        className="w-6 h-6 hidden md:block mr-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M4 6h16M4 12h16M4 18h16"
        ></path>
      </svg>
      {isOpen ? (
        <div className="hidden md:flex flex-col absolute top-16 right-0 bg-gray-500">
          <div className="px-8 py-2 cursor-pointer" onClick={() => {
              navigate(`./`);
            }} >Home</div>
          <div className="px-8 p-2">Sign Up</div>
          <div className="px-8 py-2">Login</div>
        </div>
      ) : null}
    </div>
  );
};

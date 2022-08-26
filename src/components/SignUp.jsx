// import React, { useState } from "react";
import "./SignUp.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
import React from 'react'
    
    export const SignUp = () => {

        const navigate = useNavigate() ;

      return (

        <div className="register">
        {/* <ToastContainer /> */}
        <h1>Sign-Upr</h1>
        <input
          type="text"
          name="name"
          // value={user.name}
          placeholder="Your Name"
          // onChange={handleChange}
        ></input>
        <input
          type="text"
          name="email"
          // value={user.email}
          placeholder="Your Email"
          // onChange={handleChange}
        ></input>
        <input
          type="password"
          name="password"
          // value={user.password}
          placeholder="Your Password"
          // onChange={handleChange}
        ></input>
        <input
          type="password"
          name="reEnterPassword"
          // value={user.reEnterPassword}
          placeholder="Re-enter Password"
          // onChange={handleChange}
        ></input>
  
        <div  className="button-res">
          Sign-Up
        </div>
  
        <div className="or_name">OR</div>
        <Link to="/login" className="link">
          <div className="button-log">Login</div>
        </Link>
      </div>
    );
     
      }



export default SignUp ;
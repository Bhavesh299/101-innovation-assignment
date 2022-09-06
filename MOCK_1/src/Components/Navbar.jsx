import React from 'react'
import { Link } from 'react-router-dom'
import "./dog.css"
export const Navbar = () => {
  return (
    <div className="navbar">
        <h1>DOG'S Paradise</h1>
        <h3>Login</h3>
        <h3>Sign_Up</h3>
       <Link to="/search"><p style={{textDecoration:"none",  color:"white"}}> <h3>Search Dog</h3> </p></Link> 
    </div>
  )
}

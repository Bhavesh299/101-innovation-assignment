import React from 'react'
import { Link } from 'react-router-dom'
import "./module.css"
export const Navbar = () => {
  return (
    <div className="navbar">
        <h1>DOG'S Paradise</h1>
       <Link to="/search"><p style={{textDecoration:"none", marginLeft:"200px", color:"white"}}>Search Dogs</p></Link> 
    </div>
  )
}

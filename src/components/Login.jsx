import { Link, useNavigate } from 'react-router-dom'
import './Login.css'
import React from 'react'


export const Login = () => {

    const navigate = useNavigate() ;

  return (
    <div className="login">
      {/* <ToastContainer /> */}
      <h1 >Login</h1>
      <input
        type="text"
        name="email"
        // value={user.email}
        // onChange={handleChange}
        placeholder="Enter your Email"
      ></input>
      <input
        type="password"
        name="password"
        // value={user.password}
        // onChange={handleChange}
        placeholder="Enter your Password"
      ></input>
        <div className='button-log'>
         Login
        </div>
  

      <div className='or_name' >OR</div>
      <Link to="/register" className='link' >
        <div className ="button-res" >
          Register
        </div>
      </Link>
      
    </div>
   
  )
  
}
export default Login ;
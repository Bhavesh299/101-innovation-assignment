import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
// import Data from "../Data";
import { useEffect } from "react";
import axios from 'axios';
import "./food.css";

export const FoodList = () => {
  // console.log(Data);

  const [Data , setData] = useState([]) ;

    const getData = ()=>{
      axios.get("https://run.mocky.io/v3/5ff1e1a8-b652-40c4-8c1f-5fb701ece088")
      .then((res) =>{
      const fectchData =  res.data ;
      setData(fectchData)
      })
      .catch((e) =>{
        console.log(e) ;
      });
    }
    useEffect(()=>{
      getData() ;
    },[]) ;

    const navigate = useNavigate();
    console.log(Data) ;

  return (
    <div className="mt-5 rounded-md maindiv  text-center ">
      {Data.map((item) => {
        return (
          <div
          key={item.Id}
          className=" w-3/5 m-auto md:w-full w-80 "
          >
        <div className="m-3 rounded-md border-4 w-full ">
              <img
                src="https://media.glamour.com/photos/6232428d3cd68a607606b849/master/w_2667,h_1500,c_limit/factor%20healthy%20meal%20delivery.png"
                alt="Image"
              />
            </div>
            <div className=" w-72 m-3">
              <p className="mt-6">
                {item.Menu_Items} 
              </p>
            </div >
            
            <div className="flex justify-around ">
              <button className="button" onClick={() => {
              navigate(`./FoodDetails/${item.Id}`);
            }}
            >More Details</button>
              <button className="button">Add To favorite</button>
            </div>
         
          </div>
        );
      })}
    </div>
  );
};

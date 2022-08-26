import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
// import Data from "../Data";
import { useEffect } from "react";
import axios from 'axios';
import "./food.css";

export const FoodList = () => {
  // console.log(Data);

  const [Data , setData] = useState([]) ;
  const [Data1, SetData1] = useState([]);
  const [sort, Setsort] = useState([]);
  const [filter, Setfilter] = useState([]);

    const getData = ()=>{
      axios.get("https://run.mocky.io/v3/5ff1e1a8-b652-40c4-8c1f-5fb701ece088")
      .then((res) =>{
      const fectchData =  res.data ;
      setData(fectchData)
      SetData1(fectchData)
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

    const HandelChangeFilter = (e)=>{

      const key = e.target.value;
      // console.log(arr)
      Setfilter(key);
      let arr = Data.filter((e) => {
        return e.Menu_Category === key ;
      });
      SetData1(arr);
    };
    const HandelChangeSort = (e)=>{

      const key = e.target.value;
      console.log(key)
      // Setsort(key);
      if (key === "Low To High") {
        SetData1(Data.sort((a, b) => a.Total_Sugars_g - b.Total_Sugars_g));
        Setsort(key)
      }
      if (key === "High To Low") {
        SetData1(Data.sort((a, b) => b.Total_Sugars_g - a.Total_Sugars_g));
        Setsort(key)
      }
    };
    


  return (
    <div className="div"  >
      <div className="flex justify-around mt-4">
       <div className="Filterdiv">
        <select className="selectfilter py-1.5" onChange={ HandelChangeFilter}>
        <option value="">Filter By Cetogory</option>
        <option value="Regular Menu" > Regular Menu</option>
        <option value="Breakfast Menu" > Breakfast Menu</option>
        <option value="McCafe Menu" > McCafe Menu</option>
        <option value="Gourmet Menu" >  Gourmet Menu</option>
       
        </select>
        </div>
        <div className="div2">
        <select className="selectsort py-1.5" onChange={ HandelChangeSort}>
          <option value="">Sort By Sugar</option>
        <option value="High To Low"> High To Low</option>
        <option value="Low To High"> Low To High</option>
       
       
        </select>
        </div>
      
      </div>
      <div className="mt-5 rounded-md grid grid-cols-3 gap-10 text-center md:flex flex-col">
      {Data1.map((item) => {
        return (
          <div
          key={item.Id}
          className=" w-3/5 m-auto md:w-full w-80 "
          >
        <div className="m-3  w-full ">
              <img className="rounded-xl"
                src="https://media.glamour.com/photos/6232428d3cd68a607606b849/master/w_2667,h_1500,c_limit/factor%20healthy%20meal%20delivery.png"
                alt="Image"
              />
            </div>
            <div className=" w-72 m-3 m-auto md:ml-16">
              <p className="mt-6">Name:- {item.Menu_Items} 
              </p>
              <p className=""> Category:- {item.Menu_Category} 
              </p>
              <p className=""> Category:- {item.Total_Sugars_g} 
              </p>
            </div >
            
            <div className="flex justify-around md:ml-5">
              <button className="button" onClick={() => {
              navigate(`./FoodDetails/${item.Id}`);
            }}
            >More Details</button>
              <button className="button">Add To Favourite</button>
            </div>
         
          </div>
        );
      })}
      </div>
    </div>
  );
};

import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
// import Data from "../Data";
import "./food.css";
import axios from 'axios';

export const FoodDetails = () => {
  const [Data,setData] = useState([]) ;
  const [food, setFood] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  
  const { id } = useParams();

  // console.log(id) ;
  const getData = () => {

    axios.get("https://run.mocky.io/v3/5ff1e1a8-b652-40c4-8c1f-5fb701ece088")
      .then((res) =>{
      const fectchData =  res.data ;
      // console.log(fectchData) ;
      setData(fectchData)
      filterData(fectchData);
      
      })
      .catch((e) =>{
        console.log(e) ;
      });

     
    }

  
// console.log(Data)


  const filterData = (fectchData) => {
    // console.log(Data)
    const item = fectchData.filter((a) => {

      // console.log("a",a)
      return a.Id == id ;
      
    });
// console.log("items", item)
    setFood(item) ;
    setIsLoading(false) ;
    
  };
  console.log("hello" ,food)


  useEffect(() => {
    getData() ;
    
  },[]);
 

  return (
    <div className="w-full mt-5 ">
      <div className=" m-auto  mb-5 md:w-full ">
        <div className="img-details m-auto w-2/5 ">
        <img className="rounded-xl mb-4"
                src="https://media.glamour.com/photos/6232428d3cd68a607606b849/master/w_2667,h_1500,c_limit/factor%20healthy%20meal%20delivery.png"
                alt="Image"
              />
        </div>
        <div className="  md:ml-10">
        {food.map((e) => {
        return (
          <div className="p_div">
          <p className="map_item ">Menu_Items:- {e.Menu_Items}</p>
          <p className="map_item ">Menu_Category:- {e.Menu_Category}</p>
          <p className="map_item ">Per_Serve_Size:- {e.Per_Serve_Size}</p>
          <p className="map_item ">Protein_g:- {e.Protein_g}</p>
          <p className="map_item ">Sodium_mg:- {e.Sodium_mg}</p>
          <p className="map_item ">Total_Sugars_g:- {e.Total_Sugars_g}</p>
          <p className="map_item ">Total_fat_g:- {e.Total_fat_g}</p>
          <p className="map_item ">Total_carbohydrate_g:- {e.Total_carbohydrate_g}</p>
          
          
          </div>
        )
        })
      }
        </div>
        </div>
      
    </div>
  );
};

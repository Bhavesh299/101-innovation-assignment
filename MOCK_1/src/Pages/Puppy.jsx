import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./module.css"
export const Puppy = () => {
  const [dogData, setdogData] = useState([]);
  const {breed_name} = useParams();
  const individualData = () => {
    axios
      .get(`https://dog.ceo/api/breed/${breed_name}/images`)
      .then((res) =>setdogData(res.data.message))
      .catch((err) => console.log(err));
  };
  useEffect(()=>{
    individualData();
  },[])

  console.log(dogData);
  return (
    <div className="details" >
        {dogData.map((e)=>{
                return(
                        <div>
                            <img src={e} alt="" />
                        </div>
                )
                
        })}
    </div>
  );
};

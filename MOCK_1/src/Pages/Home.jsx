import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const Home = () => {
  const [data, setData] = useState([]);

  const fetchdata = () => {
    axios
      .get("https://dog.ceo/api/breeds/list/all")
      .then((res) => {let breedArray = Object.keys(res.data.message)
        setData(breedArray)
    })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    fetchdata();
  },[])
//   console.log("data",data)
  return (
    <div>
  {data.map((e)=>{
        return(
            <Link to={`${e}`}><div key={e.key}>
              <h5>{e}</h5>
            </div></Link> 
        )
    })} 
    </div>
  );
};

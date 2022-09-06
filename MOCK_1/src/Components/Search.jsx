import axios from "axios";
import React, { useState } from "react";
import "./dog.css"
export const Search = () => {
  const [enter, setEnter] = useState("");
  const [data, setData] = useState([]);
  const handleDisplay = () => {
    axios
      .get(`https://dog.ceo/api/breed/${enter}/images`)
      .then((res) => setData(res.data.message))
      .catch((e) => console.log(e));
  };
  console.log("Enter", enter);
  return (
    <div>
      <div style={{marginLeft:"450px"}}>
        <input
          type="text"
          placeholder="Enter Dog Name"
          onChange={(e) => setEnter(e.target.value)}
        />
        <button id="search" onClick={handleDisplay}>
          Search
        </button>
      </div>
      <div className="details" >
        {data.map((e)=>{
                return(
                        <div>
                            <img src={e} alt="" />
                        </div>
                )
                
        })}
    </div>
    </div>
  );
};

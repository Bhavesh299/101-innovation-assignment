import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import Data from "../Data";
import { useEffect } from "react";

export const FoodList = () => {

  console.log(Data);

  const navigate = useNavigate();

  return (
    <div className="mt-5 rounded-md">
      {Data.map((item) => {
        return (
          <li
            key={item.code}
            className="flex justify-around w-3/5 m-auto md:w-full  bg-orange-300 cursor-pointer"
            onClick={() => {
              navigate(`./FoodDetails/${item.code}`);
            }}
          >
            <div className="m-3">
              <img
                src="https://user-images.githubusercontent.com/93373467/184477881-028070c7-6432-4de3-8dcc-a2bd4f21de3f.png"
                alt=""
              />
            </div>
            <div className=" w-72 m-3">
              <p className="mt-6">{item.product_name} ({item.generic_name})</p>
            </div>
          </li>
        );
      })}
    </div>
  );
};

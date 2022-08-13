import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Data from "../Data";
import "./food.css";

export const FoodDetails = () => {
  const [food, setFood] = useState([]);
  const { id } = useParams();

  console.log(food, "hello");

  const filterData = () => {
    const item = Data.filter((a, b) => {
      return a.code == id;
    });

    setFood(item[0]);
  };

  useEffect(() => {
    filterData();
  }, [id]);

  return (
    <div className="mt-5">
      <li className="flex justify-around  m-auto bg-orange-300 cursor-pointer mb-5 md:w-full   ">
        <div className="m-3">
          <img
            src="https://user-images.githubusercontent.com/93373467/184477881-028070c7-6432-4de3-8dcc-a2bd4f21de3f.png"
            alt=""
          />
        </div>
        <div className=" w-72 m-3 md:ml-10">
          <p className="mt-6">{food.product_name} ({food.generic_name})</p>
        </div>
      </li>
      <table class="table-auto border m-auto">
        
        <tbody className="text-center">
          <tr>
            <td>URL</td>
            <td className="text-blue-700 underline " ><a href={food.url} className="text-sm font-medium" >link</a></td>
          </tr>
          <tr>
            <td>Creator</td>
            <td>{food.creator}</td>
          </tr>
          <tr>
            <td>Packing </td>
            <td>{food.packaging}</td>
          </tr>
          <tr>
            <td>Serving_Size</td>
            <td>{food.serving_size}</td>
          </tr>
          <tr>
            <td>Energy_100g</td>
            <td>{food.energy_100g}</td>
          </tr>
          <tr>
            <td>Cholesterol_100g</td>
            <td>{food.cholesterol_100g}</td>
          </tr>
          <tr>
            <td>Fat_100g</td>
            <td>{food.fat_100g}</td>
          </tr>
          
        </tbody>
      </table>
    </div>
  );
};

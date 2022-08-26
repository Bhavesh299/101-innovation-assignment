import React from "react";
import { FoodList } from "./components/FoodList";
import {Login} from "./components/Login"
import {SignUp} from "./components/SignUp"
import { Navbar } from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import { FoodDetails } from "./components/FoodDetails";
import "./App.css";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<FoodList/>} />
        <Route path="/FoodDetails/:id" element={<FoodDetails />} />
        <Route path="/Login" element={<Login/>} />
        <Route path="/SignUp" element={<SignUp/>} />

      </Routes>
    </div>
  );
};

export default App;

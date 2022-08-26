import React from "react";
import { FoodList } from "./components/FoodList";
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
      </Routes>
    </div>
  );
};

export default App;

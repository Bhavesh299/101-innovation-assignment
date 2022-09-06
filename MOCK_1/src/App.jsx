import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "./Components/Home";
import { Navbar } from "./Components/Navbar";
import { Puppy } from "./Components/Puppy";
import { Search } from "./Components/Search";
function App() {
 
  return (
    <div className="container">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}></Route >
        <Route path="/:breed_name" element={< Puppy />}></Route >
        <Route path="/search" element={<Search/>}></Route >
      </Routes>
    </div>
  );
}

export default App;


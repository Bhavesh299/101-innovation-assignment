import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "./Pages/Home.jsx";
import { Navbar } from "./Pages/Navbar.jsx";
import { Puppy } from "./Pages/Puppy.jsx";
import { Search } from "./Pages/Search.jsx";
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


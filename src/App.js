import React from "react";
import { Route, Routes } from "react-router-dom";
import AboutMars from "./views/AboutMars";
import Home from "./views/Home";

import "./App.css"
// import AsteroidsMap from "./views/AsteroidsMap";
import ObjectsNearEarth from "./views/ObjectsNearEarth";
//  import Navbar from "./Components/Navbar";
  import Footer from "./Components/Footer";
// import MarsRovers from "./views/MarsRovers";


import MarsRovers from "./views/MarsRovers";
import Hero from "./Components/Hero";


function App() {
 return (
   <div className="App">
     <Routes>

        
      

   
       <Route path="/home" element={<Home/>} />
       <Route path="/" element={<Hero/>} />
       <Route path="/aboutMars" element={<AboutMars/>} />
       <Route path="/objects" element={<ObjectsNearEarth/>} />
       <Route path="/rovers" element={<MarsRovers/>} />
       
     </Routes>
       
      
     { <MarsRovers/> }
     <AboutMars/> 
     <Footer/>

     
     <ObjectsNearEarth/>
   

      

   </div>
 );
}
export default App;








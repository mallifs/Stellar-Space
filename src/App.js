 import React ,{useState}from "react";
 import { Route, Routes } from "react-router-dom";
import AboutMars from "./views/AboutMars";
import Home from "./views/Home";
import ObjectsNearEarth from "./views/ObjectsNearEarth";
import MarsRovers from "./views/MarsRovers";
import Hero from "./Components/Hero";
import Header from "./Components/Header";
import Navbar from "./Components/Navbar";
import "./App.js"


function App() {
  const[isShowLogin, setIsShowLogin] = useState(false)

  const handleLoginClick = () => {
    setIsShowLogin((isShowLogin) => !isShowLogin)
  }
  return (
    <div className="App">
      <Header/>
      <Navbar handleLoginClick={handleLoginClick}/>
      {/* <Login isShowLogin={isShowLogin}/> */}
      <Routes>
        <Route path="/home" element={<Home/>} />
        <Route path="/" element={<Hero/>} />
        <Route path="/aboutMars" element={<AboutMars/>} />
        <Route path="/objects" element={<ObjectsNearEarth/>} />
        <Route path="/rovers" element={<MarsRovers/>} />
      </Routes>

   
      {/* <Navbar/>
      <Footer/>
      {/* <MarsRovers/> */}
      {/* <AboutMars/> */}
    </div>
  );
}
export default App;








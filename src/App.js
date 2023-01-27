import { Route, Routes } from "react-router-dom";
import AboutMars from "./views/AboutMars";
import Home from "./views/Home";
import "./App.css"
// import AsteroidsMap from "./views/AsteroidsMap";
import ObjectsNearEarth from "./views/ObjectsNearEarth";
//  import Navbar from "./Components/Navbar";
//  import Footer from "./Components/Footer";
// import MarsRovers from "./views/MarsRovers";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<AboutMars/>} />
       

        
      </Routes>
       {/* <Navbar/>
       
      { <MarsRovers/> }
      <AboutMars/> 
      <Footer/>
      <ObjectsNearEarth/> */}
      <ObjectsNearEarth/>
    
    </div>
  );
}

export default App;

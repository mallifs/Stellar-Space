// import Footer from "../Components/Footer";
// import Hero from "../Components/Hero";
// import Navbar from "../Components/Navbar";
import React, { useEffect, useState} from "react";
// import Header from "../Components/Header"
// import Login from "../Components/login";
import "./styles.css"

function Home() {
 
   const API_URL = "https://api.nasa.gov/planetary/apod?api_key=PTiti1HsXfGe1tmV3E2QYgh2U0tDUclhzWqtTB14"
  const [pictureOfTheDay, setpictureOfTheDay] = useState([]);

   useEffect(()=>{
      fetch(API_URL)
      .then(r => r.json())
      .then(data => setpictureOfTheDay(data))
      
   },[])

  return (
    <div className="bg-dark">
    
      
     
      <div className="container">
        <h1 className="fs-1">NASA image of the day</h1>
        <div >
          <h5>{pictureOfTheDay.date}</h5>               
        </div>
        <div>
          <img className="rounded" src={pictureOfTheDay.url} alt="Nasa"/>
         
        </div>

        <div>
        <h1>{pictureOfTheDay.title}</h1>
          <p className="text-align-center col-lg-10">{pictureOfTheDay.explanation}</p>
        </div>      
      </div>
      
    </div>
  );
}

export default Home;

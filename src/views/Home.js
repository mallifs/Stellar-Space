import Footer from "../Components/Footer";
// import Hero from "../Components/Hero";
import Navbar from "../Components/Navbar";
import React, { useEffect, useState} from "react";
import Header from "../Components/Header"
import Hero from "../Components/Hero";
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
    <Header/>
      <Navbar />
      <div className="container">
        <h1 className="fs-1">NASA image of the day</h1>
        <div >
          <p>{pictureOfTheDay.date}</p>               
        </div>
        <div>
          <img className="rounded" src={pictureOfTheDay.url} alt="Nasa"/>
        </div>

        <div>
        <h1>{pictureOfTheDay.title}</h1>
          <p>{pictureOfTheDay.explanation}</p>
        </div>      
      </div>
      <Footer />
    </div>
  );
}

export default Home;

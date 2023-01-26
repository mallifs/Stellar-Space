import React from "react";
import "./hero.css";

function Hero() {
  

  return (
    <div className="hero-image">
      <div className="hero-text">
        <h1 style={{ fontSize: "50px" }}>Welcome to Stellar Space</h1>
        <p>At Stellar Space you can:</p>
        <ol>
            <li>View the Nasa image of the day</li>
            <li>See all the objects near the earth</li>
            <li>Visualize the weather on planet Mars</li>
            <li>View all photos recovered from the Mars Rover</li>
            <li>View a map of the asteroids within space</li>
        </ol>
        <p>We hope you enjoy your lil Nasa expedition</p>
        <button >To Home Page</button>
        
      </div>
    </div>
  );
}

export default Hero;

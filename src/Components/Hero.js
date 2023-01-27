import React from "react";
import "./hero.css";


function Hero() {
  

  return (
    
    <div className="hero-image mb-3 ">
      <div style={{ backgroundImage: `url(src/images/download.jpeg)`}}>
      <div className="yuk">
        <div className="hero-text container mb-3">
          <br/>
          <h1 style={{ fontSize: "50px" }}>Welcome to Stellar Space</h1>
          <p>At Stellar Space you can:</p>
          <ol>
              <p>View the Nasa image of the day</p>
              <p>See all the objects near the earth</p>
              <p>Visualize the weather on planet Mars</p>
              <p>View all photos recovered from the Mars Rover</p>
              <p>View a map of the asteroids within space</p>
          </ol>
          <p>We hope you enjoy your lil Nasa expedition</p>
          <div>
          <a href="/home">
          <button className="btn btn-primary">To Home Page</button>
          </a>
          </div>
        </div>
      </div>
      <br/>
    </div>
</div>
  );
}

export default Hero;

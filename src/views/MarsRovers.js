import React ,{useState, useEffect}from "react";
import DisplayRoverPhotos from "../Components/DisplayRoverPhotos";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import Navbar from "../Components/Navbar";

function MarsRovers() {
   
    const [roverPhotos, setRoverPhotos] = useState([{}]);
   
    useEffect(() => {
    
        fetch(
          "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=fzSdG2XbOJj2lUZxdX3IBaW0nzQGpjVRId40l7C1"
        )
        .then(res => res.json())
        .then((data) => {
                          setRoverPhotos(data.photos)
                         
                          
                        });
    }, []);
     
    console.log(roverPhotos)
      
      const eachImage= roverPhotos.map((roverPhoto, index) => {
      return (
        <>
        
        <DisplayRoverPhotos
          key={index}
          roverPhoto={roverPhoto}
        />
        
        </>
      );
    })

    return(
      <div className="bg-dark">
       
        <div className="heading" style={{textAlign : 'center'}}>
        <h1 style={{color: "#b8c0ff"}}>Photos Captured on Mars</h1>
        <p>By the Mars Rovers...</p>
         </div>
        {roverPhotos ? (
          <div className="row">
          {eachImage}
          </div>
        ) : (<div>
          <img src="image.png" alt="sad face"/>
          <p>Error,Please Try Again </p>
          </div>)}

      

      </div>
    )
  }
      
  


export default MarsRovers;

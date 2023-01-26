import React ,{useState, useEffect}from "react";
import DisplayRoverPhotos from "../Components/DisplayRoverPhotos";
import Footer from "../Components/Footer";
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
      
      {roverPhotos.map((roverPhoto, index) => {
      return (
        <>
        
        <DisplayRoverPhotos
          key={index}
          roverPhoto={roverPhoto}
        />
        
        </>
      );
    })
  }
      
  }


export default MarsRovers;
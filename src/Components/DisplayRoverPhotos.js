import React from "react";

function DisplayRoverPhotos({ roverPhoto }) {


  return (
    <div >
     

      <img  src={roverPhoto.img_src} alt="Rover" />
      <p >DATE:{roverPhoto.earth_date}</p><br/>

    </div>
  );
}

export default DisplayRoverPhotos;
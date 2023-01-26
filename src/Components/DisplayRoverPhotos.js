import React from "react";

function DisplayRoverPhotos({ roverPhoto }) {
const {camera} = roverPhoto;
const{rover} = roverPhoto

if(!roverPhoto.camera) {
  return null
}
 
const {landing_date, launch_date,status} = rover
const {full_name} = camera


  return (
    <div >
<p>{full_name}</p>
<img src={roverPhoto.img_src} alt="Mars Rover "/>
<p>DATE:{roverPhoto.earth_date}</p>
<p>Launched On:{launch_date}</p>
<p>Landed On:{landing_date}</p>
<p>Rover Status:{status}</p>
    </div>
  );
}

export default DisplayRoverPhotos;
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
    <>
      <div className="col-2 mb-3"></div>
    <div className="card " style={{width: "18rem"}}>
<p>{full_name}</p>
<img src={roverPhoto.img_src} className="card-img.top" alt="Mars Rover "/>
<div className="card-body">
<p className="card-text">DATE:{roverPhoto.earth_date}</p>
<p className="card-text">Launched On:{launch_date}</p>
<p className="card-text">Landed On:{landing_date}</p>
<p className="card-text">Rover Status:{status}</p>
</div>
</div>
    </>
  );
}

export default DisplayRoverPhotos;
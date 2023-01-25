import React ,{useEffect, useState}from 'react';


const API_KEY= "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2015-6-3&api_key=fzSdG2XbOJj2lUZxdX3IBaW0nzQGpjVRId40l7C1&feedtype"
function MarsRovers() {
    const [roverPhotos ,setRoverPhotos]=useState([])


    useEffect(
        // side effect function
        () => {
          fetch(API_KEY)
          .then(r => r.json())
          .then(data => setRoverPhotos(data));
        },[]);


    function photoData(data) {
        const data_objects = data.photos.map(photo => (
            {
                id: photo.id,
                sol: photo.sol,
                camera: {
                    id: photo.camera.id,
                    name: photo.camera.name,
                    full_name: photo.camera.full_name,
                    rover_id: photo.camera.rover_id
                },
                img_src: photo.img_src,
                earth_date: photo.earth_date,
                rover: {
                    id: photo.rover.id,
                    name: photo.rover.name,
                    landing_date: photo.rover.landing_date,
                    launch_date: photo.rover.launch_date,
                    status: photo.rover.status
                }
            }
        ));
        }

    return (
        <div>
           {roverPhotos}
        </div>
    );
}

export default MarsRovers;
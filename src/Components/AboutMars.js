import React,{useEffect} from 'react';

function AboutMars(props) {

    useEffect(
        // side effect function
        () => {
          fetch("https://api.nasa.gov/insight_weather/?api_key=fzSdG2XbOJj2lUZxdX3IBaW0nzQGpjVRId40l7C1&feedtype=json&ver=1.0")
          .then(r => r.json())
          .then(data => console.log(data));
        }
      );
    
    return (
        <div>
          
        </div>
    );
}

export default AboutMars;
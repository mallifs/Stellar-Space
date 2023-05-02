import React, { useEffect, useState } from "react";

function AboutMars(props) {
  const [solHours, setSolHours] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.nasa.gov/insight_weather/?api_key=fzSdG2XbOJj2lUZxdX3IBaW0nzQGpjVRId40l7C1&feedtype=json&ver=1.0"
    )
      .then((r) => r.json())
      .then((data) => {
        console.log(data);
        const customData = data.validity_checks["1219"];

        setSolHours(customData.AT.sol_hours_with_data);
      });
  }, []);

  return (
    <div>
      <h1 style={{ textAlign: "center", color: "#b8c0ff" }}>
        Weather On Planet Mars
      </h1>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            borderRadius: "8px",
            boxShadow: "0px 0px 8px #ccc",
            color: "#253b56",
            margin: "12px 0px",
            padding: "4px 16px 20px 16px",
          }}
        >
          <h4>ATMOSPHERIC TEMPERATURE</h4>
          {solHours.map((sol) => (
            <p key={sol}>{sol}</p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AboutMars;

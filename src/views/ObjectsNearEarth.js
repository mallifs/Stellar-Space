import React, { useEffect, useState } from "react";
import Footer from "../Components/Footer";
import Header from "../Components/Header"
import Navbar from "../Components/Navbar";

function ObjectsNearEarth() {

    const [nearEarth , setNearEarth] = useState([])
    const[dataArray,setArray] = useState([])

        
  useEffect(() => {
        fetch("https://api.nasa.gov/neo/rest/v1/feed?start_date=2015-09-07&end_date=2015-09-08&api_key=VI5CvDgJOt8j8mMVZ9NPoRMYJ1LbndXqxLDpFhzK")
        .then (res => res.json())
        .then(data => {
            setNearEarth(data.near_earth_objects['2015-09-08'])
            
        })
    },[])


     console.log(nearEarth["2015-09-08"])


     
    // let customData = [nearEarth["2015-09-07"]]
    // console.log(customData);
    //console.log({customData});

    let customList = nearEarth.map((item)=>{
        return (<h1> {item.estimated_diameter.kilometers.estimated_diameter_max} </h1>)
    })
    let customData = nearEarth.map((item) => {
        return (<h2> {item.nasa_jpl_url}</h2>)
    })
    let customApproach = nearEarth.map((item) => {
        return (<h3>{item.close_approach_data[0].relative_velocity.kilometers_per_second}</h3>)
    })
    let customDistance = nearEarth.map((item) => {
        return (<h4>{item.close_approach_data[0].miss_distance.astronomical}</h4>)
    })
    let customOrbit = nearEarth.map((item) => {
        return (<h5>{item.close_approach_data[0].orbiting_body}</h5>)
    })
    let customHazard = nearEarth.map((item) => {
        return (<h6>{item.neo_reference_id}</h6>)
})

    console.log(customList);
    console.log(customData);
    console.log("custom",customApproach);
    console.log(customDistance);
    console.log(customHazard);
        
 
  
    return (
        <div className="bg-dark">
        <Header/>
        <Navbar/>
      <div className="near" style={{ display: 'block', width: 700, padding: 30 }}>
         <h1>STELLAR SPACE ACTIVITY</h1>
        <table className="table">
            <tr>
                <th scope="col">Estimated Kilometer Max</th>
                <th scope="col">NAME</th>
                <th scope="col">CUSTOM APPROACH DATA</th>
                <th scope="col">CUSTOM DISTANCE</th>
                <th scope="col">CUSTOM ORBIT</th>
                <th scope="col">CUSTOM HAZARD</th>
            </tr>
            <tr>
                <td>{customList}</td>
                <td>{customData}</td>
                <td>{customApproach}</td>
                <td> {customDistance} </td>
                <td>{customOrbit}</td>
                <td>{customHazard}</td>
            </tr>
            
       
        {/* <p>Estimated Kilometer Max</p>
        {customList}
        <p>NAME</p>
        {customData}
        <p>CUSTOM APPROACH DATA</p>
        {customApproach}
         <p>CUSTOM DISTANCE</p>
        {customDistance} 
        <p>CUSTOM ORBIT</p>
        {customOrbit}
        <p>CUSTOM HAZARD</p>
        {customHazard} */}
        </table>       
      </div>
      <Footer/>
      </div>
    );
  }
 export default  ObjectsNearEarth;
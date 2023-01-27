import { Link } from "react-router-dom"
import React, {useState} from "react"

function Navbar({handleLoginClick}){
    const handleLogin= () => {
        handleLoginClick()
    }

    return <>
    <ul className="nav nav-pills">
        <li className="nav-item">
            <Link className="nav-link" to="/home">Home</Link>
        </li>
        <li className="nav-item">
            <Link className="nav-link" to="/aboutMars">Weather on Mars</Link>
        </li>
        <li className="nav-item">
            <Link className="nav-link" to="/objects">Near Earth</Link>
        </li>
        <li className="nav-item">
            <Link className="nav-link"to="/rovers">Rover Photos</Link>
        </li>
        <li className="nav-item">
            <div className="d-grid gap-2 d-md-flex justify-content-md-end">
            <button onClick={handleLogin} className="loginicon btn btn-primary">Sign In</button>
            </div>
        </li>
        </ul>
    </>
}
 

export default Navbar
import { Link } from "react-router-dom"
import React, {useState} from "react"

function Navbar(){
    const [user,setUser] = useState(null)

    function handleLogin(){
        setUser({
            id:1,
            username: "user"
        })
        
    }

    function handleLogOut(){
        setUser(null)
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
            {user ? (
            <button className="btn btn-primary me-md-2" onClick={handleLogOut}>Logout</button>)
            :
            (<button className="btn btn-primary" onClick={handleLogin}>Login</button>
            )}
            </div>
        </li>
        </ul>
    </>
}
 

export default Navbar
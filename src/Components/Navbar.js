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
    <Link to="/">Home</Link>
    <Link to="/aboutMars">Weather on Mars</Link>
    <Link to="/objects">Near Earth</Link>
    <Link to="/rovers">Rover Photos</Link>
    {user ? (
        <button onClick={handleLogOut}>Logout</button>)
        :
        (<button onClick={handleLogin}>Login</button>
    )}
    </>
}


export default Navbar
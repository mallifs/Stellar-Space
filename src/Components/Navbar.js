import { Link } from "react-router-dom"

function Navbar(){
    return <>
    <Link to="/">Home</Link>
    <Link to="/aboutMars">Weather on Mars</Link>
    <Link to="/objects">Near Earth</Link>
    <Link to="/rovers">Rover Photos</Link>
    </>
}


export default Navbar
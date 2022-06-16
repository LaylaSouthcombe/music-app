import React from 'react'
import { NavLink } from 'react-router-dom';


const Navbar = () => {
    return(
        <nav className="navbar">
            <ul>
                <li className="navImg"><img src="https://www.incimages.com/uploaded_files/image/1920x1080/getty_626660256_2000108620009280158_388846.jpg" style={{ width: "80px"}}/></li>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/postmalone">Post Malone</NavLink></li>
                <li><NavLink to="/glassanimals">Glass Animals</NavLink></li>
                <li><NavLink to="/curate">Curate Your List</NavLink></li>
            </ul>
        </nav>
    )
}

export default Navbar;
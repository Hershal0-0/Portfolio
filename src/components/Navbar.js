import React from 'react'
import "../css/style1.css"
import {Link} from "react-router-dom"
const Navbar = () => {
    return (
        <div className="navbar">
            <button className="nav-button">
            <Link to="/landing" style={{textDecoration:"none"}} >Home</Link>
            </button>
            <button className="nav-button">
            <Link to="/contact" style={{textDecoration:"none"}}>Say HELLO</Link>
            </button>
        </div>
    )
}

export default Navbar

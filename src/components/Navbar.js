
import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <ul className="nav nav-tabs">
            <li className="nav-item">
                <Link to="" className="nav-link">Home</Link>
            </li>
            <li className="nav-item">
                <Link to="cv" className="nav-link">CV</Link>
            </li>
            <li className="nav-item">
                <Link to="cv/add" className="nav-link">Add CV</Link>
            </li>
            <li className="nav-item">
                <Link to="login" className="nav-link">Login</Link>
            </li>

        </ul>
    )
}

export default Navbar
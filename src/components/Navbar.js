import React from 'react'
import {NavLink} from 'react-router-dom'

export default function Navbar() {
    return (
        <div className="container pt-3">
            <div className="text-center" id="name">BIJAYATA GURUNG</div>
            <nav className="navbar pt-4 justify-content-around">
                <NavLink exact to="/" className="navb" activeClassName="activeNav">
                    <div>Home</div>
                </NavLink>
                <NavLink exact to="/about" className="navb" activeClassName="activeNav">
                    <div>About Me</div>
                </NavLink>
                <NavLink exact to="/projects" className="navb" activeClassName="activeNav">
                    <div>Projects</div>
                </NavLink>
                <NavLink exact to="/contact" className="navb" activeClassName="activeNav">
                    <div>Contact Me</div>
                </NavLink>
            </nav>
        </div>
    )
}

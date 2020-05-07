import React from 'react'
import { Link } from 'react-router-dom'

import './style.css'

export default function Navbar() {
    return (
        <nav class="navbar navbar-expand-lg navbar-light">
            <Link to='/'className="navbar-brand" ><img alt='logo' src="./assets/img/logo.png"></img></Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                <li className="nav-item active">
                    <Link to='/about'className="nav-link">About Me <span className="sr-only">(current)</span></Link>
                </li>
                <li className="nav-item">
                    <Link 
                   to='/projects' className="nav-link" >Projects</Link>
                </li>
                <li className="nav-item">
                    <Link to='/contact' className="nav-link">Contact Me!</Link>
                </li>
                </ul>
            </div>
        </nav>
    )
}

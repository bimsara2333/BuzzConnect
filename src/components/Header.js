import React from "react";
import logo from '../Images/2.png';
import './styles.css';

function Header(){
    return(
        <nav class="navbar navbar-expand-lg " style={{ backgroundColor: '#1b1f24' }}>
        <div className="a1">
        <img src={logo} alt="Logo" width="200" height="55" />
        </div>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div className="a2">
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
            <li class="nav-item active">
                <a class="nav-link" href="#" style={{ color: 'white' }}>Home</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#" style={{ color: 'white' }}>Services</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#" style={{ color: 'white' }}>Features</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#" style={{ color: 'white' }}>Pricing</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#" style={{ color: 'white' }}>Contact</a>
            </li>&nbsp;&nbsp;&nbsp;
            <li class="nav-item">
                <a class="nav-link" href="#" style={{ color: 'white' }}>Login</a>
            </li>
            <button type="button" class="btn btn-success">Sign Up</button>
            </ul>
        </div>
        </div>
        </nav>
    )
}
export default Header;
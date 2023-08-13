import React, { Component } from "react"
import LOGO from "../harmonyhorizon-logo.png"
import { Link } from "react-router-dom"
//need to figure out login

//This component is the Header/Navbar
//It will have the Logo and Name in the left hand side, the navbar will be in the middle and on the right the profile/login button will be there

export default class Header extends Component {




    render(){
        return(
            <div className="header">
                <div className="Left">
                    <img src= {LOGO} width="150" height="100" alt="HH-Logo" className="left"></img>
                </div>
                <div className="Center">
                    <Link to="/" className="nav-item"><h3 id="Home">Home</h3></Link>
                    <Link to="/search" className="nav-item"><h3 id="Search">Search</h3></Link>
                    <Link to="/recs" className="nav-item"><h3 id="Recs">Reccommendations</h3></Link>
                </div>
                <div className="Profile">
                    <Link to="/Profile" className="nav-item"><h3 id="Profile">Display Profile Here</h3></Link>
                </div>
            </div>
        )
    }
}
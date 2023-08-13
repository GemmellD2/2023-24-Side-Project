import React, { Component } from "react"
//need to figure out login

//This component is the Home page
//This will display a welcome message, a random reccommendation not based on anything which will update daily 
//and a search which will allow the user to search for similar artists

export default class Header extends Component {


    render(){
        return(
            <div className="home">
                <div className="welcomeMessage">
                    <h1>Prepare to chart your melody-filled voyage and find the horizon with good music!</h1>
                </div>
                <div className="home-body">
                    <div className="box">
                        <h2>Search for artist similar to the one you enter!</h2>
                        <input></input><br/>
                        <button>Search</button>
                    </div>

                    <div className="box">
                        <h2>Today's random artist is:</h2>
                        <h3>Artist Name</h3>
                        <p>Link to the artist page</p>
                    </div>
                </div>
                
            </div>
        )
    }
}
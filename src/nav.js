import React, { Component } from 'react';
import './nav.css'

class Navbar extends Component {
    render(){
        return(
            <div className="nav">
            <h4>Recipe Card</h4>
            <div className ="navItem">
                <p>Home</p>
                <p>About</p>
                <p>Contact</p>
            </div>
            </div>
        )
    }
}

export default Navbar;
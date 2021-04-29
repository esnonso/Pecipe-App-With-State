import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './nav.css'

class Navbar extends Component {
    static defaultProps = {
        onNewRecipe() {}
    }

    static propTypes = {
        onNewRecipe: PropTypes.func
    }

    render(){
        return(
            <div className="nav">
            <h4>Recipe Card</h4>
            <div className ="navItem">
                <li><a href="#" onClick={this.props.onNewRecipe}>New Recipe</a></li>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
            </div>
            </div>
        )
    }
}

export default Navbar;
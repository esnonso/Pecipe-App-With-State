import React, { Component } from 'react';
import './recipe.css'

class Recipe extends  Component  {
    render() {
        const { title, instructions } = this.props; //Destructuring
        const ingridients = this.props.ingridients.map((ing, index) => (
            <li key={index}>{ing}</li>
        ))
        return (
            <div >
                <div className ="recipeDiv">
            <img src={process.env.PUBLIC_URL + '/rice.png'} alt="logo" />
            <p>{title}</p>
            <ul>{ingridients}</ul>
            {instructions}
            </div>
            </div>
        )
    }
}

export default Recipe;
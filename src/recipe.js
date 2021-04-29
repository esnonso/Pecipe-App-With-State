import React, { Component } from 'react';
import './recipe.css';
import PropTypes from 'prop-types'

class Recipe extends  Component  {
    static propTypes = {
        title: PropTypes.string.isRequired,
        ingridients: PropTypes.arrayOf(PropTypes.string).isRequired,
        instructions:PropTypes.string.isRequired,
        image:PropTypes.string.isRequired
       
    }
    render() {
        const { title, instructions, image } = this.props; //Destructuring
        const ingridient = this.props.ingridients.map((ing, index) => (
            <li key={index}>{ing}</li>
       ))
        
        return (
            <div >
                <div className ="recipeDiv">
            <img src={image} alt="logo" />
            <h5>{title}</h5>
            <ol>{ingridient}</ol>
            {instructions}
            </div>
            </div>
        )
    }
}

export default Recipe;
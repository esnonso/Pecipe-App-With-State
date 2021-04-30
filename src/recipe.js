import React, { Component } from 'react';
import './recipe.css';
import PropTypes from 'prop-types'

class Recipe extends  Component  {
    static propTypes = {
        title: PropTypes.string.isRequired,
        ingridients: PropTypes.arrayOf(PropTypes.string).isRequired,
        instructions:PropTypes.string.isRequired,
        image:PropTypes.string.isRequired,
        id:PropTypes.number.isRequired,
        onDelete:PropTypes.func.isRequired
    }
    render() {
        const { title, instructions, image, id, onDelete } = this.props; //Destructuring
        const ingridient = this.props.ingridients.map((ing, index) => (
            <li key={index}>{ing}</li>
       ))
        
        return (
            <div >
                <div className ="recipeDiv">
            <img src={image} alt="logo" />
            <h5>{title}</h5>
            <ol><h5>INGRIDIENTS</h5>{ingridient}</ol>
           <p>{instructions}</p> 
            <button type="button" id="delete" onClick={()=> onDelete(id)}>DELETE</button>
            </div>
            </div>
        )
    }
}

export default Recipe;
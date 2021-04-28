import React, { Component } from 'react';
import Recipe from './recipe'
import PropTypes from 'prop-types';
import './recipeList.css'

class RecipeList extends Component {
   
    static propTypes = {
        recipes: PropTypes.arrayOf(PropTypes.object).isRequired
    }
    render(){
        const recipes = this.props.recipes.map((recipe, index) => (
            < Recipe key ={index} {...recipe} />
        ))
        return(
            <div className="recipeList">
                {recipes}
            </div>
        )
    }
}

export default RecipeList;
import React, { Component } from 'react';
import Recipe from './recipe'
import PropTypes from 'prop-types';
import './recipeList.css'

class RecipeList extends Component {
   
    static propTypes = {
        recipes: PropTypes.arrayOf(PropTypes.object).isRequired,
        onDelete:PropTypes.func.isRequired
    }
    render(){
        const { onDelete } = this.props
        const recipes = this.props.recipes.map((recipe, index) => (
            < Recipe key ={recipe.id} {...recipe} onDelete={onDelete} />
        ))
        return(
            <div className="recipeList">
                {recipes}
            </div>
        )
    }
}

export default RecipeList;
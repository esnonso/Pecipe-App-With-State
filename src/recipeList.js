import React, { Component } from 'react';
import Recipe from './recipe'
import PropTypes from 'prop-types';
import './recipeList.css'

class RecipeList extends Component {
    static defaultProps = {
        recipes:[{
            title : "Pasta",
            ingridients : ["oil", "pasta", "water"],
            instructions :"LOREM IPSUN NOR GREE SAY ANYTHING BECAUSE I NOR GET NETWOTRK BLAH BLAH BLAH"
        },
        {
            title : "Rice",
            ingridients : ["rice", "tomato", "water"],
            instructions :"LOREM IPSUN NOR GREE SAY ANYTHING BECAUSE I NOR GET NETWOTRK BLAH BLAH BLAH"
        },
        {
            title : "Yam",
            ingridients : ["rice", "yam", "water"],
            instructions :"LOREM IPSUN NOR GREE SAY ANYTHING BECAUSE I NOR GET NETWOTRK BLAH BLAH BLAH"
        }
    ]
    }
    static propTypes = {
        recipes: PropTypes.arrayOf(PropTypes.object)
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
import React, { Component } from 'react';
import './App.css';
import Navbar from './nav'
import RecipeList from './recipeList';
import Form from './recipeForm';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      recipes:[
            {
              id:0,
              title : "Pasta",
              ingridients : ["oil", "pasta", "water"],
              instructions :"LOREM IPSUN NOR GREE SAY ANYTHING BECAUSE I NOR GET NETWOTRK BLAH BLAH BLAH",
              image:"rice.png"
          },
          {   
              id:1,
              title : "Rice",
              ingridients : ["rice", "tomato", "water"],
              instructions :"LOREM IPSUN NOR GREE SAY ANYTHING BECAUSE I NOR GET NETWOTRK BLAH BLAH BLAH",
              image:"rice.png"
          },
          {   
              id:2,
              title : "Yam",
              ingridients : ["rice", "yam", "water"],
              instructions :"LOREM IPSUN NOR GREE SAY ANYTHING BECAUSE I NOR GET NETWOTRK BLAH BLAH BLAH",
              image:"rice.png"
          }
      ],
      nextRecipeId: 3,
    }
    this.handleSave = this.handleSave.bind(this);
  }
  handleSave(recipe){
   this.setState((prevState, props) => {
     const newRecipe = {...recipe, id:this.state.nextRecipeId};
     return{
       nextRecipeId: prevState +1,
       recipes:[...this.state.recipes, newRecipe]
     }
   })
  }
  render(){
    return(
      <div className="App">
        < Navbar />
        < Form  onSave={this.handleSave}/>
        < RecipeList recipes={this.state.recipes} />
      </div>
    )
  }
}
 
export default App;

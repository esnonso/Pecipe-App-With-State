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
              id:1,
              title : "Pasta",
              ingridients : ["oil", "pasta", "water"],
              instructions :"LOREM IPSUN NOR GREE SAY ANYTHING BECAUSE I NOR GET NETWOTRK BLAH BLAH BLAH"
          },
          {   
              id:2,
              title : "Rice",
              ingridients : ["rice", "tomato", "water"],
              instructions :"LOREM IPSUN NOR GREE SAY ANYTHING BECAUSE I NOR GET NETWOTRK BLAH BLAH BLAH"
          },
          {   
              id:3,
              title : "Yam",
              ingridients : ["rice", "yam", "water"],
              instructions :"LOREM IPSUN NOR GREE SAY ANYTHING BECAUSE I NOR GET NETWOTRK BLAH BLAH BLAH"
          }
      ],
      nextRecipeId: 3,
    }
  }
  render(){
    return(
      <div className="App">
        < Navbar />
        < Form />
        < RecipeList recipes={this.state.recipes} />
      </div>
    )
  }
}
 
export default App;

import React, { Component } from 'react';
import './App.css';
import Navbar from './nav'
import RecipeList from './recipeList';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      recipes:[
            {
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
  }
  render(){
    return(
      <div className="App">
        < Navbar />
        < RecipeList recipes={this.state.recipes} />
      </div>
    )
  }
}
 
export default App;

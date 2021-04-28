import React, { Component } from 'react';
import './App.css';
import Navbar from './nav'
import RecipeList from './recipeList';

class App extends Component {
  render(){
    return(
      <div className="App">
        < Navbar />
        < RecipeList />
      </div>
    )
  }
}

export default App;

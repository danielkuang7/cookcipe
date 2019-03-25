import React, { Component } from 'react';
import './App.css';
import Form from "./components/Form";

const API_KEY = "0f601abe3f1498ec7886f8be22d95a23";

class App extends Component {

  getRecipe = async (e) => {
    const recipeName = e.target.elements.recipeName.value;
    e.preventDefault();
    const api_call = await fetch(`https://www.food2fork.com/api/search?key=${API_KEY}&q=shredded%20chicken`);
    
    const data = await api_call.json();
    // console.log(data.recipes[0].recipe_id);
    console.log(data);
  }

  render() {
    return (
      <div className="App">
        <header>My App</header>
        <Form getRecipe={this.getRecipe}/>
      </div>
    );
  }
}

export default App;

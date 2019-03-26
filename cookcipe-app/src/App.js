import React, { Component } from 'react';
import './App.css';
import Form from './components/Form';
import Header from './components/Header';
import Footer from './components/Footer';
import Recipes from './components/Recipes'


class App extends Component {
  constructor(props){
  super(props);
  this.state = {
    recipes: []
  }

  this.handleSubmit=this.handleSubmit.bind(this)
}

getRecipe(userInput){
  let endpoint= `https://www.food2fork.com/api/search?key=54ebc42713b42b560c05d50131e7b7d4&q=${userInput}`
  fetch(endpoint)
  .then(response=>response.json())
  .then(data=>{
    this.setState({recipes: data.recipes})
  })
}

handleSubmit(userInput){
  this.getRecipe(userInput)
}

  render() {
    return (
      <div className="App">
        <Header />   
        <Form submit={this.handleSubmit}/>
        <Recipes recipes={this.state.recipes} />
        <Footer />
      </div>
    );
  }
}

export default App;

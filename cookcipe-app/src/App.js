import React, { Component } from 'react';
import './App.css';
import Search from './components/Search';
import Header from './components/Header';
import Footer from './components/Footer';
import Recipes from './components/Recipes';
import Logo from './components/Logo';


class App extends Component {
  constructor(props){
  super(props);
  this.state = {
    recipes: []
  }

  this.handleSubmit=this.handleSubmit.bind(this)
}

componentDidMount(){
  this.getRecipe()
}

getRecipe(userInput){
  let endpoint= `https://www.food2fork.com/api/search?key=3d4db73071714591d0ebf9b51672d81c&q=${userInput}`
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
        <Logo /> 
        <Search submit={this.handleSubmit}/>
        <Recipes recipes={this.state.recipes} />
        <Footer />
      </div>
    );
  }
}

export default App;

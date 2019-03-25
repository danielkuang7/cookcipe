import React, { Component } from 'react';
import './App.css';
import Form from './components/Form';
import Header from './components/Header';
import Footer from './components/Footer';


const API_KEY = "0f601abe3f1498ec7886f8be22d95a23";

class App extends Component {
  state = {
    recipes: []
  }

  getRecipe = async (e) => {
    const recipeName = e.target.elements.recipeName.value;
    e.preventDefault();
    const api_call = await fetch(`https://www.food2fork.com/api/search?key=${API_KEY}&q=${recipeName}`);
    
    const data = await api_call.json();
    this.setState({recipes: data.recipes})
   
  }

  render() {
    return (
      <div className="App">
        <Header />
        
        <Form getRecipe={this.getRecipe}/>

        <Footer />
      </div>
    );
  }
}

export default App;

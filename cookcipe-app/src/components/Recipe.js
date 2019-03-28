import React, { Component } from 'react';

import { Link } from "react-router-dom";


class Recipe extends Component {
  constructor(props){
    super(props)
  this.state = {
    details: []
  }
  this.getDetails = this.getDetails.bind(this)
  }  
  
  componentDidMount(){
    this.getDetails()
  }

  getDetails() {
    const title = this.props.location.state.recipe;
    let endpoint= `https://cors-anywhere.herokuapp.com/http://food2fork.com/api/search?key=872498ad70c0abbf0571fc7ff3e7d991&q=${title}`
    fetch(endpoint)
      .then(response => response.json())
      .then(json => {
        this.setState({
          details: json.recipes[0]
        })
      })
}

    


  render() {
    const recipe = this.state.details;
    return (
      <div key={recipe.title} >
        { this.state.details.length !== 0 &&
          <div className='items'>
            <img className='toimage' src={recipe.image_url} alt={recipe.title}/>
            <h2>{ recipe.title }</h2>
            <p>Link to recipe: 
              <span><a href={recipe.publisher_url}>{recipe.publisher_url}</a></span>
            </p>
            <button className='home_button'>
              <Link to="/">Home</Link>
            </button>
          </div>
        }
      </div>
    );
  }
};

export default Recipe;

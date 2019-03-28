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
    let endpoint= `https://cors-anywhere.herokuapp.com/http://food2fork.com/api/search?key=0f601abe3f1498ec7886f8be22d95a23&q=${title}`
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
      <div className='new_page' key={recipe.title} >
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

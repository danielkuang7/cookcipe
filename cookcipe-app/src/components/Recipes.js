import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Recipes extends Component {
    constructor(props){
        super(props)
    this.getRecipes=this.getRecipes.bind(this)
    }

getRecipes(){
    return this.props.recipes.map(recipe=>
        <div className='container'>
        <div className='row'>
        <div key={recipe.recipe_id}>
        <img src={recipe.image_url} alt={recipe.title} />
        <p>{ recipe.title}</p>
        <p>
        <span>Publisher:
            {recipe.publisher}
        </span>
        </p>
        <button>
        <Link to={{ 
          pathname: `/recipe/${recipe.recipe_id}`,
          state: { recipe: recipe.title}
          }}>View Recipe</Link>
        </button>  
        </div>
        </div>
        </div>
        )
        
    }

  render() {
    return (
      <div>
        {this.getRecipes()}
      </div>
    );
  }
}

export default Recipes;
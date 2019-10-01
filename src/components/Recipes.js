import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Recipes extends Component {
    constructor(props){
        super(props)
    this.getRecipes=this.getRecipes.bind(this)
    }

getRecipes(){
    return this.props.recipes.map(recipe=>
       
    <div key={recipe.recipe_id}> 
              <img className='image' 
              src={recipe.image_url} 
              alt={recipe.title} />
             
              <span className='recipe_title'>{ recipe.title}</span> 
              
              <button className='button'>
                <Link className='link' to={{ 
                pathname: `/recipe/${recipe.recipe_id}`,
                state: { recipe: recipe.title}
                }}>Recipe Link</Link>
              </button> 
    </div>
    
    )
    
}

  render() {
    return (
      <div className='container'>
        {this.getRecipes()}
      </div>
    );
  }
}

export default Recipes;


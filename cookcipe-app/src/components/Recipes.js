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
   
       <div className='container'>
       
        <img className='image' src={recipe.image_url} alt={recipe.title} />
       
            <p className='recipe_title'>{ recipe.title}</p>
           
        <button className='button'>
            <Link to={{ 
            pathname: `/recipe/${recipe.recipe_id}`,
            state: { recipe: recipe.title}
            }}>View Recipe Link</Link>
        </button> 
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
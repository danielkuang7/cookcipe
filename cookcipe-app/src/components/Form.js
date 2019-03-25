import React from 'react';

const Form = props => (
  <div className="input">
  <form onSubmit={props.getRecipe}>
    <input className="input" type="text" name="recipeName" />
    <button className="button">Search</button>
  </form>
  </div>
);


export default Form;
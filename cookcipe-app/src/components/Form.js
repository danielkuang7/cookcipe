import React, { Component } from 'react';

class Form extends Component {
  constructor(props){
      super(props)
      this.state={
          value:''
      }
      this.handleSearch=this.handleSearch.bind(this)
      this.handleSubmit=this.handleSubmit.bind(this)
  }
  handleSearch=(e)=>{
      this.setState({value: e.target.value})
  }
  handleSubmit(e){
      e.preventDefault()
      this.props.submit(this.state.value)
  }
render() {
  return (
    <div className="input">
      <form onSubmit={this.handleSubmit}>
          <input className="box"
          onChange={this.handleSearch}
          type='text'
          placeholder='Enter a key word for any recipe'
          />
          <input type='submit' value='Search'/>
      </form>
    </div>
  );
}
}


export default Form;
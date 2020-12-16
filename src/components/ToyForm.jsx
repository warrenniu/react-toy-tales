import React, { Component } from 'react';

class ToyForm extends Component {

  state = {
    name: "",
    image: ""
  }

  localChangeHandler = (event) => {
    this.setState({[event.target.name]: event.target.value})
  }

  localSubmitHandler = (event) => {
    event.preventDefault()
    this.props.submitHandler(this.state)
  }

  render() {
    return (
      <div className="container">
        <h1>Toy Form</h1>
        <form onSubmit={this.localSubmitHandler} className="add-toy-form">
          <h3>Create a toy!</h3>
          <input type="text" name="name" placeholder="Enter a toy's name..." value={this.state.name} onChange={this.localChangeHandler} className="input-text"/>
          <br/>
          <input type="text" name="image" placeholder="Enter a toy's image URL..." value={this.state.image} onChange={this.localChangeHandler} className="input-text"/>
          <br/>
          <input type="submit" name="submit" value="Create New Toy" className="submit"/>
        </form>
      </div>
    );
  }

}

export default ToyForm;

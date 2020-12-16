import React from 'react';
import './App.css';

import Header from './components/Header'
import ToyForm from './components/ToyForm'
import ToyContainer from './components/ToyContainer'


class App extends React.Component {

  state = {
    arrayOfToys: [],
    display: false
  }

  componentDidMount() {
    fetch("http://localhost:4000/toys")
      .then(resp => resp.json())
      .then(arrayOfToys => this.setState(
        { arrayOfToys: arrayOfToys }
      ))
  }

  handleClick = () => {
    let newBoolean = !this.state.display
    this.setState({
      display: newBoolean
    })
  }

  createToyObjectHandler = (toyObj) => {
    fetch('http://localhost:4000/toys', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(toyObj),
    })
      .then(response => response.json())
      .then(newToyObj => {
        this.setState({ arrayOfToys: [newToyObj, ...this.state.arrayOfToys,] });
      })
  }

  deleteToyObjectHandler = (toyObjId) => {
    console.log("from App", toyObjId)
    let newToyArray = this.state.arrayOfToys.filter(toyEl => toyEl.id !== toyObjId)
    this.setState({arrayOfToys: newToyArray})

      
    fetch(`http://localhost:4000/toys/${toyObjId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      
    })
      .then(response => response.json())
      .then(console.log)
  }

  updateToyObjectHandler = (toyObj) => {

    
    fetch(`http://localhost:4000/toys/${toyObj.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({likes: toyObj.likes ++}),
    })
      .then(response => response.json())
      .then(this.setState({ arrayOfToys: this.state.arrayOfToys}));
        // updatedToyObj = toyObj
        
      
  }


  render() {
    return (
      <>
        <Header />
        { this.state.display
          ?
          <ToyForm submitHandler={this.createToyObjectHandler} />
          :
          null
        }
        <div className="buttonContainer">
          <button onClick={this.handleClick}> Add a Toy </button>
        </div>
        <ToyContainer arrayOfToys={this.state.arrayOfToys} submitHandler={this.deleteToyObjectHandler} likeHandler={this.updateToyObjectHandler} />
      </>
    );
  }

}

export default App;

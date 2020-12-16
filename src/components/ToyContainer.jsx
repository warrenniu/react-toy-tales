import React from 'react';
import ToyCard from './ToyCard'

function ToyContainer(props) {

  const renderToyCards = () => {
    return props.arrayOfToys.map(toyEl => <ToyCard key={toyEl.id} toyObj={toyEl} submitHandler={props.submitHandler} likeHandler={props.likeHandler} />)
  }
  return(
    <div id="toy-collection">
      <h1>Toy Container</h1>
      {renderToyCards()}
    </div>
  );
}


export default ToyContainer;

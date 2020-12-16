import React, { Component } from 'react';

function ToyCard(props) {

  const localDeleteHandler = () => {
    props.submitHandler(props.toyObj.id)
  }

  const localLikeHandler = () => {
    props.likeHandler(props.toyObj)
  }
  
    return (
      <div className="card">
        <h2>{props.toyObj.name}</h2>
        <img src={props.toyObj.image} alt={props.toyObj.name} className="toy-avatar" />
        <p>{props.toyObj.likes} Likes </p>
        <button onClick={localLikeHandler} className="like-btn">Like {'<3'}</button>
        <button onClick={localDeleteHandler} className="del-btn">Donate to GoodWill</button>
      </div>
    );
  }


export default ToyCard;

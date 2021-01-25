import React, { Component } from 'react';
const MovieCard = (props) => {


    return ( <div className="card" style={{width: "18rem"}}>
    <img className="card-img-top" src={props.img} alt="Card image cap"/>
    <div className="card-body">
      <h5 className="card-title">{props.title}</h5>
      <p className="card-text">{props.description}</p>
    </div>
  </div> );
}
 
export default MovieCard;
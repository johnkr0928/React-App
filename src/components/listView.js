import React from 'react';

const List = (props) =>
  <li className="list-group-item" onClick={() => {props.showDetails(props.data)}}>
    <div className="list-container">
      <img src={props.data.backgroundImageURL} alt="Not Available"/>
      <div className="bottom-left">
        <div className="header">{props.data.name}</div>
        <div className="category">{props.data.category}</div>
      </div>
    </div>
  </li>

export default List;

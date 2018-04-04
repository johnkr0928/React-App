import React from 'react';
import Map from './mapContainer.js';

const Details = (props) =>
    <div>
    {props.selected.location && 
      <Map {...props}/>}
    <div className="details-header">
      <div className="header">{props.selected.name}</div>
      <div className="category">{props.selected.category}</div>
    </div>
    <div className="details-content">
    {props.selected.location && 
      <div className="details-address">{props.selected.location.formattedAddress.join(' ')}</div>}
      {props.selected.contact && props.selected.contact.formattedPhone &&
      <div className="details-phone">{props.selected.contact.formattedPhone}</div>}
      {props.selected.contact && props.selected.contact.twitter &&
        <div className="details-twitter">@{props.selected.contact.twitter}</div>}
    </div>
    </div>

export default Details;

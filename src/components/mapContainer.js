import React from 'react';
import Map from './map.js'

const MyMapContainer = (props) =>
  <Map
    {...props}
    googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCvE4uKkEd-ZttCGyicVnGeAHeS1pHr9b0&v=3.exp&libraries=geometry,drawing,places&signed_in=true"
    loadingElement={<div style={{ height: `100%` }} />}
    containerElement={<div style={{ height: `100%` }} />}
    mapElement={<div className="mapStyle" />}
  />

export default MyMapContainer;

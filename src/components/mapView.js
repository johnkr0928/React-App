import React from 'react';
import { withScriptjs, withGoogleMap, GoogleMap} from "react-google-maps";
import MapMarker from './marker';

const MyMapComponent = withScriptjs(withGoogleMap((props) =>
  <GoogleMap
    defaultZoom={15}
    defaultCenter={{ lat: props.data[0].location.lat, lng: props.data[0].location.lng }}
  >
  {props.data && props.data.map(function(data, index) {
              return <MapMarker key={index} selected={data}/>
            }, this)}
  </GoogleMap>
))


const MyMapContainer = (props) =>
  <MyMapComponent
    {...props}
    googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCvE4uKkEd-ZttCGyicVnGeAHeS1pHr9b0&v=3.exp&libraries=geometry,drawing,places&signed_in=true"
    loadingElement={<div style={{ height: `100%` }} />}
    containerElement={<div style={{ height: `100%` }} />}
    mapElement={<div style={{ height: `100%` }} />}
  />



export default MyMapContainer;
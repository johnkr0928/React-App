import React from 'react';
import { withScriptjs, withGoogleMap, GoogleMap} from "react-google-maps";
import MapMarker from './marker';

const MyMapComponent = withScriptjs(withGoogleMap((props) =>
  <GoogleMap
    defaultZoom={18}
    defaultCenter={{ lat: props.selected.location.lat, lng: props.selected.location.lng }}
  >
  <MapMarker {...props}/>
  </GoogleMap>
))

export default MyMapComponent;
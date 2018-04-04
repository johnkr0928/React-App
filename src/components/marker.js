import React, { Component } from 'react';
import { Marker, InfoWindow } from "react-google-maps";


class MapMarker extends Component {
  constructor(){
    super();
    this.state ={
      showInfoWindow: false,
    }
  }

  render() {
    const marker = this.props;
    return (
      <Marker
        position={{lat: marker.selected.location.lat,lng: marker.selected.location.lng}} 
        onClick={(e) => { this.setState({ showInfoWindow: true }) }}>
        { this.state.showInfoWindow ?
            <InfoWindow onCloseClick={(e) => { this.setState({ showInfoWindow: false }) }}>
                <div className="marker">
                <div className="marker-header">{marker.selected.name}</div>
                {marker.selected.contact && 
                <div>{marker.selected.contact.formattedPhone}</div>}
                </div>
            </InfoWindow>
            : null
        }
      </Marker>
    );
  }
}

export default MapMarker;

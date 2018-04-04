import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import mapLogo from './map.png';
import List from './components/listView.js';
import Details from './components/detailsView.js';
import MapView from './components/mapView.js';
import {ListGroup} from 'react-bootstrap';

class App extends Component {
  constructor(){
    super();
    this.state ={
      data: null,
      showDetails: false,
      selected: {},
      showMap: false
    }
    this.showDetails = this.showDetails.bind(this);
  }

  componentDidMount(){
    this.getData();
  }

  getData(){
    const self = this;
    axios.get('https://s3.amazonaws.com/br-codingexams/restaurants.json')
    .then(function (response) {
      self.setState({
        data: response.data.restaurants
      })
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  showDetails(selected){
    this.setState({
      selected: {}
    }, function(){
      this.setState({
        showDetails: true,
        selected
      });
    });
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
        {(this.state.showDetails || this.state.showMap) && <i className="arrow left"  onClick={() => {this.setState({showDetails: false, showMap:false, selected: {}})}}></i>}
          <h1 className="App-title">Lunch Tyme</h1>
          <img src={mapLogo} alt="Not Available" className="mapLogo"  onClick={() => {this.setState({showMap:!this.state.showMap})}}></img>
        </header>
        <div className="section">
        {!this.state.showMap && <div className={"listView " + (this.state.showDetails ? 'hide' : 'show')}>
          <ListGroup>
            {this.state.data && this.state.data.map(function(data, index) {
              return <List key={index} data={data} showDetails={this.showDetails}/>
            }, this)}
          </ListGroup>
        </div>}
        {!this.state.showMap && <div className={"details " + (this.state.showDetails ? 'show' : 'hide')}>
          <Details selected={this.state.selected}/>
        </div>}
        {this.state.data && this.state.showMap && <MapView data={this.state.data}/>}
        </div>
      </div>
    );
  }
}

export default App;

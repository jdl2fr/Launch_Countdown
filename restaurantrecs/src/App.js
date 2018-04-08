import React, { Component } from 'react';
import logo from './logo.svg';
import RestaurantList from './RestaurantList.js'
import './App.css';

class App extends Component {
  render() {
    let googleData = []
    //make call to google maps API here and store as props for react object
    let axios = require("axios");

    function getMapsData() {
      axios
      .get(
        "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=38.0293,-78.4767&radius=500&type=restaurant&key=AIzaSyDia5OKW5vOzkUjZoBq0QJGjn-FUypLPW0"
      )
      .then(response => {
        googleData = response.data.results;
      })
      .catch(error => {
        console.log(error);
    });
    }

    getMapsData();

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <RestaurantList googleData={googleData}/>
      </div>
    );
  }
}

export default App;

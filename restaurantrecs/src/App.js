import React, { Component } from "react";
import logo from "./logo.svg";
import RestaurantList from "./RestaurantList.js";
import "./App.css";
let axios = require("axios");

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    axios
      .get(
        "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=38.0293,-78.4767&radius=500&type=restaurant&key=AIzaSyDia5OKW5vOzkUjZoBq0QJGjn-FUypLPW0"
      )
      .then(response => {
        this.setState({
          data: response.data.results
        });
        //googleData.map(datum=>{console.log(datum.name + " has a rating of " + datum.rating+" and price level of "+datum.price_level+" is open now: "+datum.opening_hours.open_now);});
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    //   const Test = ({ resturants }) => (
    //     <div>
    //       {resturants.map(rest => (
    //         <div className="rest" key={rest.name}>
    //           {rest.name}
    //         </div>
    //       ))}
    //     </div>
    //   );

    //   return (
    //     <div>
    //       <ul>
    //         <Test resturant={restruants} />
    //       </ul>
    //     </div>
    //   );
    // }

    let { resturantArray } = this.state.data.map(resturant => {
      return <RestaurantList resturant={resturant} />;
    });

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        {resturantArray}
      </div>
    );
  }
}

export default App;

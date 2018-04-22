import React, { Component } from "react";
import "./App.css";

/* PROPS
  data: object of restaurants and scores
*/

/* States
  

*/

export default class RestaurantList extends Component {
  // constructor

  // render method
  render() {
    let { resturantData } = this.props; //curly bracket becasue its an object
    let isOpen;
    if (resturantData.opening_hours.open_now) {
      isOpen = "IT'S OPEN NOW!";
    } else {
      isOpen = "SORRY! It's not open right now!";
    }
    return (
      <div>
        <ul>
          {" "}
          Name: {resturantData.name}
          <li>Rating: {resturantData.rating}</li>
          <li> Price Level: {resturantData.price_level}</li>
          <li> Is Open?: {isOpen}</li>
        </ul>
      </div>
    );
  }
}

//googleData.map(datum=>{console.log(datum.name + " has a rating of " + datum.rating+" and price level of "+datum.price_level+" is open now: "+datum.opening_hours.open_now);});

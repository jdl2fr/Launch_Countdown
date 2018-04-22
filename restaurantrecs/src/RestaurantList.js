import React, { Component } from "react";

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
    console.log({ resturantData });
    return (
      <div>
        <h6> Name: </h6>
        <p> {resturantData.name} </p>

        <h6> Rating: </h6>
        <p> {resturantData.rating} </p>

        <h6> Price Level: </h6>
        <p> {resturantData.price_level} </p>

        <h6> Is Open?: </h6>
        <p> {resturantData.opening_hours.open_now} </p>
      </div>
    );
  }
}

//googleData.map(datum=>{console.log(datum.name + " has a rating of " + datum.rating+" and price level of "+datum.price_level+" is open now: "+datum.opening_hours.open_now);});

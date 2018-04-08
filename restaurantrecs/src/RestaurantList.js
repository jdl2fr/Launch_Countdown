import React, { Component } from "react";

/* PROPS
  data: object of restaurants and scores
*/

export default class RestaurantList extends Component {
  // render method
  render() {
    // return an array of react components by mapping 
    // through array and turning them into react components
    let bullets = this.props.googleData.map(googleData => {
      return (
        <div>
        <ul>
          <li>{" "}{googleData.name}: {googleData.rating}{" "}</li>
        </ul>
        </div>
      );
    });

    return (
      <div>
          {bullets}
      </div>
    );
  }
}
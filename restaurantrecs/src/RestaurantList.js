import React, { Component } from "react";

/* PROPS
  data: object of restaurants and scores
*/

/* States
  

*/

export default class RestaurantList extends Component {
  // constructor
  constructor(props) {
    super(props);
    this.state = {};
  }


  // render method
  render() {
    // return an array of react components by mapping 
    // through array and turning them into react components
    let bullets =["Hello", "How are you doing"];
    //this.props.googleData.map(googleData => { });

    return (
      <div>
          {bullets}
      </div>
    );
  }
}
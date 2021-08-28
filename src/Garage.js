import React, { Component } from "react";
import Car from "./Car";
import "./Garage.css";

class Garage extends Component {
  render() {
    let carList = [
      <Car key="1" rate={this.props.rate} data={{brand:"Ford",seats:5,price:800000000}} />,
      <Car key="2" rate={this.props.rate} data={{brand:"BMW",seats:7,price:1500000000}} />,
      <Car key="3" rate={this.props.rate} data={{brand:"Toyota",seats:16,price:900000000}} />,
    ];
    return (
      <div>
        <h1 className="garage-bg">
          Who live in my garage  ({this.props.name})?
        </h1>
        {carList}
      </div>
    );
  }
}

export default Garage;

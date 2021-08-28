import React, { Component } from "react";

class Car extends Component {
  constructor(props) {
    super(props);
    this.newPrice = (props.data.price/props.rate).toFixed(1);
    this.newPrice = parseFloat(this.newPrice);
    this.state = {
      brand: 'Ford',
      seats: 7,
      price: 1000000000
    }
  }
  changePrice = () => {
    //this.state.price = 1100000000;//error
    this.setState({
      seats: 12,
      price: 1100000000
    })
  }
  render() {
    return (
      <div>
        <h2 className="car-color" onClick={this.changePrice}>
          Hello, i am a <em>{this.state.brand}</em>
        </h2>
        Seats: {this.state.seats}
        <br />
        Price: {this.state.price.toLocaleString()}
        <hr />
      </div>
    );
  }
}

export default Car;

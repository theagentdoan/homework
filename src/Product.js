import React from "react";
import "./Product.css";

class Product extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 111,
      image: 222,
      price: 333,
      liked: false,
      value: 1,
    };
  }

  componentDidMount() {
    fetch("https://fakestoreapi.com/products/" + this.props.id)
      .then((res) => res.json())
      .then((data) =>
        this.setState({
          name: data.title,
          image: data.image,
          price: data.price,
        })
      )
      .catch((err) => console.log(err));
    console.log("Did mount" + this.ProductID);
  }
  componentDidUpdate() {
    console.log("Did update");
  }
  componentWillUnmount() {
    console.log("Will unmount");
    clearInterval(this.ProductID);
  }

  toggleLike = (state) => {
    this.setState({
      liked: !this.state.liked,
    });
  };

changeValue = (v) => {
  if (this.state.value === 0){
  (v > 0) &&
  this.setState({value: this.state.value + v})}
  else
  this.setState({value: this.state.value + v})
}

  render() {
    console.log("render" + this.ProductID);
    return (
      <div id="packbag">
        <h2 id="title">{this.state.name}</h2>
        <img id="img" src={this.state.image} alt={this.state.name} />
        <h2 id="price">${this.state.price}</h2>
        <button id="buyBtn">BUY</button>
        
        <span id="likeBtn" onClick={this.toggleLike} > {this.state.liked ? "💓" : "💔" }</span>
        <div id="inputNumber">
        <button onClick={() => this.changeValue(-1)}>-</button>
        <input name="quantity" min={1} type="number" id="number" value={this.state.value}></input>
        <button onClick={() => this.changeValue(1)}>+</button>
        </div>
      </div>
    );
  }
}

export default Product;

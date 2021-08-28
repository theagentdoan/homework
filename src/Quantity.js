import React from "react";
import "./Product.css" 
class Quantity extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value:5}
  }
   
  handleClick = (ev) => {    
// if(ev.target.innerHTML == "ON")
// ev.target.innerHTML = "OFF";
// else
// ev.target.innerHTML = "ON"
this.setState({isOn:!this.state.isOn})
    }

//   increase= ()=>{
//     this.setState({value:this.state.value + 1});
//   }
// decrease= ()=>{
//     this.setState({value: Math.max(1, this.state.value - 1)});
//   }                  

changeValue (v) {
this.setState({value:this.state.value +v});
}

    render() {
      return (
        <div id="quantity">
        <button onClick={() => this.changeValue(-1)}>-</button>
        <input style={{width:50}} value={this.state.value}/>
        <button onClick={() => this.changeValue(1)}>+</button>
        </div>
      );
  }
}

    
export default Quantity;
import React from "react";

class Toggle extends React.Component {
    constructor(props) {
      super(props);
      this.state = {isOn: this.props.init}
    }
     
    handleClick = (ev) => {    
// if(ev.target.innerHTML == "ON")
// ev.target.innerHTML = "OFF";
// else
// ev.target.innerHTML = "ON"
this.setState({isOn:!this.state.isOn})
      }

      render() {
        return (
          <button onClick={this.handleClick}>
           {this.state.isON ? 'ON' : 'OFF' }
          </button>
        );
    }
}
    
export default Toggle;
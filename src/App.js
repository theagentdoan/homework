import React from "react";
import Clock from "./Clock";
import Product from "./Product";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { show: true };
  }
  toggleTimer = () => {
    this.setState({
      show: !this.state.show,
    });
  };
  render() {
    return (
      <>
        <Product id="1" />
        <Product id="2" />
      </>
    );
    // if (this.state.show)
    //   return (
    //     <>
    //       <button onClick={this.toggleTimer}>Toogle Timer</button>
    //       <Clock />
    //     </>
    //   );
    // else
    //   return (
    //     <>
    //       <button onClick={this.toggleTimer}>Toogle Timer</button>
    //     </>
    //   );
  }
}

export default App;

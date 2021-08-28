import React from "react";
// import Clock from "./Clock";
import Product from "./Product";
import "./Product.css"
class App extends React.Component {
  constructor(props) {
    super(props)}
//     this.state = { show: true };
//   }
//   toggleTimer = () => {
//     this.setState({
//       show: !this.state.show,
//     });
//   };
  render() {
    return (
        <div className="display">
        <Product id={1}/>
        <Product id={2}/>
        <Product id={3}/>
        <Product id={4}/>
        <Product id={20}/>
        <Product id={19}/>
        <Product id={18}/>
        <Product id={17}/>
        </div>
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


import React from "react";
class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {
    // this.timerID = setInterval(
    //   () => this.tick(),
    //   1000
    // );
    this.clockID = setInterval(this.tick, 1000);
    console.log("Did mount" + this.clockID);
  }
  componentDidUpdate() {
    console.log("Did update");
  }
  componentWillUnmount() {
    console.log("Will unmount");
    clearInterval(this.clockID);
  }

  tick = () => {
    this.setState({
      date: new Date(),
    });
  };

  render() {
    console.log("render" + this.clockID);
    return (
      <div>
        <h1 onClick={this.tick}>Hello, world!</h1>
        <h2>{this.state.date.toLocaleTimeString()}</h2>
      </div>
    );
  }
}

export default Clock;

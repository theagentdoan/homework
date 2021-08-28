import React from "react";

// class Football extends React.Component {
//     constructor(props)
//     {
//         super(props);
//         this.titeo = this.shoot.bind(this);
//     }
//     shoot(t) {
//       alert(t);
//     }
//     render() {
//       return (
//         <button onClick={this.shoot.bind(this, "Messi")}>Take the shot!</button>
//       );
//     }
//   }

  class Football extends React.Component {
    constructor(props)
    {
        super(props);
        this.titeo = this.shoot.bind(this);
    }
    shoot = (t1, t2,ev) => {
      alert(t1);
      alert(ev.type);
      alert(t2+t1);
    }
    render() {
      return (
        <button onClick={(e) => this.shoot(30, "Messi", e)}>Take the shot!</button>
      );
    }
  }
  
  export default Football; 
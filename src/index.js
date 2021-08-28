// import React from 'react';
import ReactDOM from "react-dom";
// import Car from "./Car";
// import Garage from "./Garage";
// import { HelloWorld, Welcome } from "./HelloWorld";
// import App from './App';
import Product from "./Product";
//import Football from "./Football";
// import Toggle from "./Toggle";
// import Quantity from "./Quantity";
import "./Product.css";

ReactDOM.render(
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
    , document.getElementById("app"));

// ReactDOM.render(
//   <>
//     <HelloWorld />
//     <Welcome />
//     <Garage name="Viet Nhat" rate={23000}/>
//   </>,
//   document.getElementById("app")
// );

//  <Toggle init={true}/>
// {/* <Toggle init={false}/>  */}




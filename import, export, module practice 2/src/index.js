import React from "react";
import ReactDOM from "react-dom"
import {add, multiply, substract, divide} from "./calculator.js";

ReactDOM.render(
  <ul>
    <li>{add(1, 2)}</li>
    <li>{multiply(2, 3)}</li>
    <li>{substract(7, 2)}</li>
    <li>{divide(5, 2)}</li>
  </ul>,
  document.getElementById("root")
);







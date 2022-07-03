import React, { Component } from "react";
import "./App.css";
import thor from "./images/thor.png"

const App = () =>  {
  return (
    <div id="app">
      <h1>Welcome to the Odinshop!</h1>
      <img src={thor}></img>
      <a href="https://www.theodinproject.com/lessons/node-path-javascript-shopping-cart">The Odin Project - Shopping Cart</a>
      <p>2022 Alex Tresselt</p>
      </div>
  );
};

export default App;

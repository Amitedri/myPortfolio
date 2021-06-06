import ReactDOM from "react-dom";
import React from "react";
import "./App.css";
import background from './one.jpg'
import Home from "./Components/Home";
const App = () => {
  return (
    <div className="App">
      <img src={background} alt="background" />
      <Home />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

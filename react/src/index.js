import React from "react";
import ReactDOM from "react-dom/client";
// import Car from './components/Car.js';
import App from './App';
import Welcome from "./components/Welcome";



// const name = "Your name";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  React.createElement("h1", { style: { textAlign: "center" } }, name)
);

root.render (<Car/>);
ReactDOM.render(<Welcome />, root);

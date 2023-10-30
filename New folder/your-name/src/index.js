import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
const name = "your name";
const h1 = React.createElement("h1" ,{ style:{
  textAlign: "center",
  color: "red"
}}, name)

const students = [
  {
    company:'alfreds futterkiste',
    contact:'maria anders',
    country: 'germany'
  },

  {
    company:'centro comercial moctezuma',
    contact: 'francisco chang',
    country:'mexico'
  },

{
  company:'ernst handel',
  contact:'roland mendel',
  country: 'austria'
},

{
  company:'island trading',
  contact:'helen bennett',
  country:'UK'
}

]

const aElm = React.createElement("a", {
  href:"google.com"
}, "go to google");

const h1Elm = <h1  style={
  {
    textAlign: "center",
    color: "red"
  }
}>{name}</h1>

const divStyle = {
  color:"white",
  backgroundColor:"red",
  textAlign:"center"
}

const divElm = <div style={divStyle}>hello </div>

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  divElm
);

reportWebVitals();

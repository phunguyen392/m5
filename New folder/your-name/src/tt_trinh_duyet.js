import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const browser = 
  <h4> browser's details: {navigator.userAgent} </h4>
;

ReactDOM.render(
  <React.StrictMode>
    <div>
    {browser}
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();


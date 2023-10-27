import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const fruits = ['Apple', 'Banana', 'Orange', 'Apricot', 'Black rowan', 'Cranberry'];

ReactDOM.render(
  <React.StrictMode>
    <div>
      <h1>List of fruits</h1>
      <ul>
       {

        fruits.map( ( value, index) => (
          <li>{ value }</li>
        ))

       }
      </ul>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();

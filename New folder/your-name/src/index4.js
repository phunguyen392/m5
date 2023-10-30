import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

<div>
  <h1>xin chao</h1>
  <h3>
    hom nay la {new Date().toLocaleTimeString() }.
  </h3>
</div>

const root = ReactDOM.createRoot(document.getElementById("root"));
const tick = ()=> {root.render(
  <div>
    <h1>xin chao</h1>
    <h3>
      hiện tại là {new Date().toLocaleTimeString()} PM
    </h3>
    <h2>ngay {new Date().toDateString() } </h2>
  </div>
);
};
setInterval(tick,1000)
reportWebVitals();


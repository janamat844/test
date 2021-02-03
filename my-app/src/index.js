import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import First from '/First';
import Navbar from '/components/layout/Navbar.js';
import 'bootstrap/dist/css/bootstrap.min.css';

import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Navbar/>
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();

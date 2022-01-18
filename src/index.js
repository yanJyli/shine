import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import './index.css';
import App from './components/App';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename="/shine">      
        <App />      
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
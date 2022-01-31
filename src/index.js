import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';

import './index.css';
import App from './components/App';

import store from './store';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename="/shine"> 
      <Provider store={store}>     
        <App />   
      </Provider>   
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
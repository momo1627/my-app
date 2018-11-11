import React from 'react';
import ReactDOM from 'react-dom';
import App from './App/App'
import './index.css';
import axios from 'axios';
import * as serviceWorker from './serviceWorker';
axios.defaults.headers.common.Authorization = `Bearer ${localStorage.getItem('access_token')}`
axios.interceptors.response.use(
    response => {
      return response;
    },
    error => {
      if (error.response.status === 401 || error.response.status === 403) {
        window.location.href = 'http://localhost:3000/'
      }
      return error;
    }
  );
ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

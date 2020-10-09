import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
// import App from './App';
import User from './User/App';

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    <User />
  </React.StrictMode>,
  document.getElementById('root')
);
import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
// import App from './App';
import User from './User/App';
import {Provider} from "react-redux";
import store from "./User/Redux/store";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <User />
    </Provider>
    {/* <App /> */}
  </React.StrictMode>,
  document.getElementById("root")
);
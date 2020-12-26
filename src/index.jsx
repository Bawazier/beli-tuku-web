import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import User from './User/App';
import {Provider} from "react-redux";
import { store, persistor } from "./User/Redux/store";
import { PersistGate } from "redux-persist/es/integration/react";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <User />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
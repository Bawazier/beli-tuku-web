import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import {Provider} from "react-redux"

import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Register from "./Pages/Signup";
import Profile from "./Pages/Profile";

import store from './Redux/store';

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/auth/login" component={Login} exact />
            <Route path="/auth/signup" component={Register} exact />
            <Route path="/profile/account" component={Profile} exact />
          </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;

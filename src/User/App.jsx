import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import {connect} from "react-redux"

import Home from "./Pages/Home";
import Search from "./Pages/Search";
import Category from "./Pages/Category";
import Login from "./Pages/Login";
import Register from "./Pages/Signup";
import Profile from "./Pages/Profile";

import PrivateRoute from "./Components/PrivateRoute/"

import authAction from "./Redux/actions/auth"

class App extends React.Component {
  componentDidMount(){
    if(localStorage.getItem("token")){
      this.props.token(localStorage.getItem("token"))
    }
  }
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <PrivateRoute exact path="/profile/account">
            <Profile />
          </PrivateRoute>
          <Route path="/" render={(props) => <Home {...props} />} exact />
          <Route
            path="/auth/login"
            render={(props) => <Login {...props} />}
            exact
          />
          <Route
            path="/auth/signup"
            render={(props) => <Register {...props} />}
            exact
          />
          <Route
            path="/products/search"
            render={(props) => <Search {...props} />}
            exact
          />
          <Route
            path="/products/category"
            render={(props) => <Category {...props} />}
            exact
          />
        </Switch>
      </BrowserRouter>
    );
  }
}

const mapDispatchToProps = {
  token: authAction.setToken,
};

export default connect(null, mapDispatchToProps)(App);

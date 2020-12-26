import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { connect } from "react-redux";

import Home from "./Pages/Home";
import DetailProduct from "./Pages/DetailProduct";
import Catalog from "./Pages/Catalog";
import Cart from "./Pages/Cart";
import Checkout from "./Pages/Checkout";
import Profile from "./Pages/Profile";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import ResetPass from "./Pages/ResetPass";
import ConfirmPass from "./Pages/ConfirmPass";

import PrivateRoute from "./Components/PrivateRoute";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/login" render={(props) => <Login {...props} />} exact />
          <Route
            path="/signup"
            render={(props) => <Signup {...props} />}
            exact
          />
          <Route
            path="/reset"
            render={(props) => <ResetPass {...props} />}
            exact
          />
          <Route
            path="/reset/confirm"
            render={(props) => <ConfirmPass {...props} />}
            exact
          />
          <Route path="/" render={(props) => <Home {...props} />} exact />
          <Route
            path="/product"
            render={(props) => <DetailProduct {...props} />}
            exact
          />
          <Route
            path="/catalog"
            render={(props) => <Catalog {...props} />}
            exact
          />

          <PrivateRoute exact path="/profile" component={Profile} />
          <PrivateRoute exact path="/bag" component={Cart} />
          <PrivateRoute exact path="/checkout" component={Checkout} />
        </Switch>
      </BrowserRouter>
    );
  }
}
export default App;

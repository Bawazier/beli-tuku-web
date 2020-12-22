import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./Pages/Home";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          {/* <PrivateRoute exact path="/profile/account">
            <Profile />
          </PrivateRoute> */}
          <Route path="/" render={(props) => <Home {...props} />} exact />
        </Switch>
      </BrowserRouter>
    );
  }
}
export default App;

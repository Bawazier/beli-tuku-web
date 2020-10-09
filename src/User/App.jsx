import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// import Home from './pages/Home';
import Login from './Pages/Login';
import Register from "./Pages/Signup";

class App extends React.Component {
	render() {
		return (
      <BrowserRouter>
        <Switch>
          {/* <Route path="/" component={Home} exact /> */}
          <Route path="/auth/login" component={Login} exact />
          <Route path="/auth/signup" component={Register} exact />
        </Switch>
      </BrowserRouter>
    );
	}
}

export default App;
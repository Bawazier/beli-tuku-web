import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// import Home from './pages/Home';
import Login from './Pages/Login';
import Register from './Register/Register';

class App extends React.Component {
	render() {
		return (
      <BrowserRouter>
        <Switch>
          {/* <Route path="/" component={Home} exact /> */}
          <Route path="/auth/login" component={Login} exact />
          <Route path="/auth/register" component={Register} exact />
        </Switch>
      </BrowserRouter>
    );
	}
}

export default App;
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './Pages/Home';
import Episode from './Pages/Episode';

class App extends React.Component {
	render() {
		return (
			<BrowserRouter>
				<Switch>
					<Route path="/" component={Home} exact />
					<Route path="/episode" component={Episode} exact />
				</Switch>
			</BrowserRouter>
		)
	}
}

export default App;

import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './Pages/Home';
import Product from './Pages/Product';
import Category from './Pages/Category';
import User from './Pages/User';
import Cart from './Pages/Cart';

class App extends React.Component {
	render() {
		return (
			<BrowserRouter>
				<Switch>
					<Route path="/" component={Home} exact />
					<Route path="/product" component={Product} exact />
					<Route path="/category" component={Category} exact />
					<Route path="/user" component={User} exact />
					<Route path="/cart" component={Cart} exact />
				</Switch>
			</BrowserRouter>
		)
	}
}

export default App;

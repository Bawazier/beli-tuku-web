import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// import Home from './Pages/Home';
import Product from './Pages/Product';
import User from './Pages/User';
import Category from './Pages/Category';
import Cart from './Pages/Cart';

class App extends React.Component {
	render() {
		return (
			<BrowserRouter>
				<Switch>
					{/* <Route path="/" component={Home} exact /> */}
					<Route path="/admin/product" component={Product} exact />
					<Route path="/admin/user" component={User} exact />
					<Route path="/admin/category" component={Category} exact />
					<Route path="/admin/cart" component={Cart} exact />
				</Switch>
			</BrowserRouter>
		)
	}
}

export default App;

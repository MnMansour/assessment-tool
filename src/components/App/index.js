import React, { Component } from 'react';
import {
	BrowserRouter as Router,
	Route,
	Switch,
	Redirect
} from 'react-router-dom';
import MainLayout from '../MainLayout';
<<<<<<< HEAD
import Icon from '../GenericIcons/Icon';
import umbrella from '../GenericIcons';
=======
import NotFound from '../NotFound';
>>>>>>> 712312606140c83f8d87a0f95a4ef3bbd76ca25c

class App extends Component {
	render() {
		return (
			<Router>
				<Switch>
					<Route path="/app" component={MainLayout} />
					<Redirect from="/" to="/app" exact />
<<<<<<< HEAD
					{/* <Route path="/genericicons" render={()=><Icon mysvg={umbrella} />}  /> */}
=======
					<Route render={NotFound} />
>>>>>>> 712312606140c83f8d87a0f95a4ef3bbd76ca25c
				</Switch>
			</Router>
		);
	}
}

export default App;

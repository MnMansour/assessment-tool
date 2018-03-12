import React, { Component } from 'react';
import {
	BrowserRouter as Router,
	Route,
	Switch,
	Redirect
} from 'react-router-dom';
import MainLayout from '../MainLayout';
import Icon from '../GenericIcons/Icon';
import umbrella from '../GenericIcons';
import NotFound from '../NotFound';

class App extends Component {
	render() {
		return (
			<Router>
				<Switch>
					<Route path="/app" component={MainLayout} />
					<Redirect from="/" to="/app" exact />
					{/* <Route path="/genericicons" render={()=><Icon mysvg={umbrella} />}  /> */}
					<Route render={NotFound} />
				</Switch>
			</Router>
		);
	}
}

export default App;

import React, { Component } from 'react';
import {
	BrowserRouter as Router,
	Route,
	Switch,
	Redirect
} from 'react-router-dom';
import MainLayout from '../MainLayout';
import Icon from '../GenericIcons/Icon';
import NotFound from '../NotFound';
import umbrella from '../GenericIcons/umbrella.svg';

class App extends Component {
	render() {
		return (
			<Router>
				<Switch>
					<Route path="/app" component={MainLayout} />
					<Redirect from="/" to="/app" exact />
					{/*<Route
						path="/genericicons"
						render={() => <Icon src={umbrella} size="x3" iconColor="dark" />}
					/>*/}
					<Route render={NotFound} />
				</Switch>
			</Router>
		);
	}
}

export default App;

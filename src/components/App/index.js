import React, { Component } from 'react';
import {
	BrowserRouter as Router,
	Route,
	Switch,
	Redirect
} from 'react-router-dom';

import MainLayout from '../MainLayout';
import GenericIcons from '../GenericIcons';

class App extends Component {
	render() {
		return (
			<Router>
				<Switch>
					<Route path="/app" component={MainLayout} />
					<Redirect from="/" to="/app" exact />
					{/*<Route render={() => <h1>404</h1>} />*/}
					{/*<Route path="/genericicons" component={GenericIcons} size="20" />*/}
				</Switch>
			</Router>
		);
	}
}

export default App;

import React, { Fragment } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Header from '../Header';
import Login from '../Login';
import Footer from '../Footer';
import Profile from '../Profile';

const MainLayout = ({ match }) => {
	return (
		<Fragment>
			<Header />
			<div className="body">
				<Switch>
					<Route path={`${match.url}/home`} component={Login} />
					<Route path={`${match.url}/profile/:id`} component={Profile} />
					<Redirect from={match.url} to={`${match.url}/home`} />
				</Switch>
			</div>
			<Footer />
		</Fragment>
	);
};

export default MainLayout;

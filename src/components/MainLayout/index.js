import React, { Fragment } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Header from '../Header';
import Login from '../Login';
import LoginAdmin from '../LoginAdmin';
import Footer from '../Footer';
import signupForm from '../Signup';

const MainLayout = ({ match }) => {
	return (
		<Fragment>
			<Header />
			<Switch>
				<Route path={`${match.url}/home`} component={signupForm} />
				<Route path={`${match.url}/login-admin`} component={LoginAdmin} />
				<Route path={`${match.url}/login`} component={Login} />
				<Redirect from={match.url} to={`${match.url}/home`} />
			</Switch>
			<Footer />
		</Fragment>
	);
};

export default MainLayout;

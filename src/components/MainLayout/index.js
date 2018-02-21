import React, { Fragment } from "react";
import propTypes from "prop-types";
import { Switch, Route, Redirect } from "react-router-dom";
import StudentListContainer from "../StudentListContainer";
import Header from "../Header";
import Login from "../Login";
import LoginAdmin from "../LoginAdmin";
import Footer from "../Footer";

const MainLayout = ({ match }) => {
	return (
		<Fragment>
			<Header />
			<Switch>
				<Route path={`${match.url}/home`} render={() => <h1>home</h1>} />
				<Route path={`${match.url}/login-admin`} component={LoginAdmin} />
				<Route path={`${match.url}/login`} component={Login} />
				<Redirect from={match.url} to={`${match.url}/home`} />
			</Switch>
			<StudentListContainer />
			<Footer />
		</Fragment>
	);
};

MainLayout.propTypes = {
	match: propTypes.object
};

export default MainLayout;

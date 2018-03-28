import React, { Fragment } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import propTypes from "prop-types";
import ClassManagementContainer from "../ClassManagement/index";
import Header from "../Header";
import Login from "../Login/index";
import LoginAdmin from "../LoginAdmin/index";
import User from "../Login/User";
import Footer from "../Footer";
import LandingPage from "../Home/index";
import Button from "../Button-generic/index";
import Loader from "../Loader/Loader";
import SortableTableContainer from "../SortableTableContainer";
import StudentListContainer from "../StudentListContainer";
const MainLayout = ({ match }) => {
	
	return (
		<Fragment>
			<Header />
			<Switch>
				<Route path={`${match.url}/home`} render={() => <LandingPage />}/>
				<Route path={`${match.url}/login-admin`} component={LoginAdmin} />
				<Route path={`${match.url}login`} component={Login} />
				<Route path={`${match.url}/class-management/:id`} component={ClassManagementContainer} />
				<Route path={`${match.url}/user/:id`} component={User} />
				<Route path={`${match.url}/button`} component={Button} />
				<Route path={`${match.url}/loader`} component={Loader} />
				<Route path={`${match.url}/dashboard`} component={SortableTableContainer} />
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

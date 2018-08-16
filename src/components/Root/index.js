import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Header from '../Header';
import Login from '../Login';
import SignUp from '../Forms/SignUp';
import Footer from '../Footer';
import Profile from '../Profile';
import Users from '../Users';
import NotAllowedUsers from '../NotAllowedUsers';
import AuthenticatedComponent from '../AuthenticatedComponent';
import LoadingComponent from '../LoadingComponent';


const Root = (props) => {
	return (
		<LoadingComponent>
			<Header/>
			<div className="body">
				<Switch>
					<Route exact path='/login' component={Login}/>
					<Route exact path='/students' component={()=><div>students</div>}/>
					<Route exact path='/aboutus' component={()=><div>About us</div>}/>
					<Route exact path='/notallowed/:id' component={NotAllowedUsers} />
					<AuthenticatedComponent>
						<Route exact path='/settings' component={SignUp} />
						<Route exact path='/' component={Users} />
						<Route exact path='/profile' component={Profile} />
						<Route exact path='/profile/:id' component={Profile} />
					</AuthenticatedComponent>
	 			</Switch>
			</div>
			<Footer />
		</LoadingComponent>
	)
};

export default Root;

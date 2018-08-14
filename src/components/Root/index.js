import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { applyMiddleware ,createStore } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import reducers from '../../redux/reducers';

import Header from '../Header';
import Login from '../Login';
import SignUp from '../Forms/SignUp';
import Footer from '../Footer';
import Profile from '../Profile';
import Users from '../Users';
import NotAllowedUsers from '../NotAllowedUsers';
import AuthenticatedComponent from '../AuthenticatedComponent';
import LoadingComponent from '../LoadingComponent';


const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);


const store = createStoreWithMiddleware(reducers);

const Root = () => (
	<Provider store={store}>
		<BrowserRouter>
			<LoadingComponent>
				<Header/>
				<div className="body">
					<Switch>
						<Route path='/Login' component={Login} />
						<Route exact path='/notallowed/:id' component={NotAllowedUsers} />
						<AuthenticatedComponent>
							<Route exact path='/SignUp' component={SignUp} />
							<Route exact path='/' component={Users} />
							<Route exact path='/profile' component={Profile} />
							<Route path='/profile/:id' component={Profile} />
						</AuthenticatedComponent>
					</Switch>
				</div>
				<Footer />
			</LoadingComponent>
		</BrowserRouter>
	</Provider>
);

export default Root;

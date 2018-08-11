import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { applyMiddleware ,createStore } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import reducers from '../../redux/reducers';

import Header from '../Header';
import Login from '../Login';
import Footer from '../Footer';
import Profile from '../Profile';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);


const store = createStoreWithMiddleware(reducers);

const Root = () => (
	<Provider store={store}>
		<BrowserRouter>
			<div className="Root">
				<Header/>
				<div className="body">
					<Switch>
						<Route path='/Login' component={Login} />
						<Route exact path='/' component={Profile} />
					</Switch>
				</div>
				<Footer />
			</div>
		</BrowserRouter>
	</Provider>
);

export default Root;

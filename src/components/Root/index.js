import React from 'react';
import { applyMiddleware ,createStore } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import reducers from '../../redux/reducers';
import App from '../App';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);


const store = createStoreWithMiddleware(
	reducers,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const Root = () => (
	<Provider store={store}>
		<App />
	</Provider>
);

export default Root;

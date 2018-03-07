import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";

import reducers from "../../redux/reducers";
import App from "../App";

const store = createStore(
	reducers,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const Root = () => (
	<Provider store={store}>
		<App />
	</Provider>
);

export default Root;

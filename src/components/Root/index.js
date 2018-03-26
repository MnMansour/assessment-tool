import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import throttle from "lodash/throttle";
//import {getUsers} from '../../util/middleware';
import { I18nextProvider } from "react-i18next";
import i18n from "../../i18n.js";
import allReducers from "../../redux/reducers";
import App from "../App";
import "./index.css";

//const middleware = applyMiddleware(getUsers)

const store = createStore(
	allReducers, JSON.parse(localStorage.getItem("state")) || undefined,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
store.subscribe(throttle(()=>{
	localStorage.setItem("state", JSON.stringify(store.getState()));
}, 5000));

const Root = () => (
	<I18nextProvider i18n={i18n}>
		<Provider store={store}>
			<App />
		</Provider>
	</I18nextProvider>
);

export default Root;

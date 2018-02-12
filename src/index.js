import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Root from './components/Root/';
import registerServiceWorker from './registerServiceWorker';
import {createStore} from 'redux';
import { Provider} from 'react-redux';
import rootReducer from './redux/reducers.js'

const store = createStore(rootReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

ReactDOM.render(<Provider store={store}><Root /></Provider>, document.getElementById('root'));
registerServiceWorker();

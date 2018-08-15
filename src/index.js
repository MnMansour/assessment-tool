import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Switch} from 'react-router-dom';
import {applyMiddleware ,createStore} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import reducers from './redux/reducers';
import Root from './components/Root/';
import registerServiceWorker from './registerServiceWorker';
import './index.scss';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const store = createStoreWithMiddleware(reducers);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Root />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();

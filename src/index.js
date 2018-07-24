import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Root from './components/Root/';
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();

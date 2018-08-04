import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router} from 'react-router-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import "./style/bootstrap.css";
import "./style/App.css";

ReactDOM.render(<Router basename="/reacted"><App /></Router>, document.getElementById('root'));
registerServiceWorker();

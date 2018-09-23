import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router} from 'react-router-dom';
import App from './App';

import "./style/bootstrap.css";
import "./style/App.css";

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Router basename=""><App /></Router> , div);
    ReactDOM.unmountComponentAtNode(div);
});

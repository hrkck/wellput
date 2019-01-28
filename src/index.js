import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router} from 'react-router-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import "./style/bootstrap.css";
import "./style/App.css";

ReactDOM.render(<Router basename={`${process.env.PUBLIC_URL}`}><App /></Router>, document.getElementById('root'));
registerServiceWorker();


/*
IMPORTANT:

Using react-router in github pages was a little difficult. Following the previous posts in internet I could not solve the problem but with my own.
Before, reading these links will be helpful:

https://github.com/facebook/create-react-app/issues/1765
https://github.com/facebook/create-react-app/issues/2218
https://itnext.io/so-you-want-to-host-your-single-age-react-app-on-github-pages-a826ab01e48

People talk about some var called 'process.env.PUBLIC_URL', which does the root directory handling somehow automatically. This did not quite work for me.

As it suggest in the 3rd link above, this var will print out the project page sub-dir of Github Project Pages.

For example,
If my github page link is,
    hrkucuk.github.io
and my project page's link is,
    hrkucuk.github.io/reacted
the variable is then that last part of the URL:
    '/reacted'

    ## UPDATE: this website is moved from 
        hrkucuk.github.io/reacted
    to
        hrkucuk.github.io

This all makes sense, however using the var did not help me. So I simply added the sub directory "/reacted" to my basename of the BrowserRouter as you can see in the code above.

That way it all worked. 

NOTE: This comment should later be documented in a better medium.
For future: There are some other important insights/concepts/tricks about deploying websites on GitHub with React ecosystem. Would be, like, awesome if I can document them as well.
*/

/**
 * UPDATE:
 * in order to handle hard refreshes and manual address changes,
 * I applied the tricks described below:
 * https://github.com/rafrex/spa-github-pages
 * 
 */
import React, {Component} from "react";
import {Route, Link, Switch} from "react-router-dom";

import Home from './Content/Pages/Home';
import About from './Content/Pages/About';
import Topics from './Content/Pages/Topics';
import { pages } from './Content/Pages/Pages';
import {Nav, SubNav} from './Components/core/Nav/Nav';
import { NotFound } from './Components/core/NotFound/Page404';
import { topicsList } from './Content/Topics/Topics';

class App extends Component {
    render() {
        return (
            // <div className="container-fluid">
            //     <div className="container">
            //         <div className="row">
            //             {pages.map(page => (
            //                 <div className="col-lg-12 col-md-2">
            //                     <Link to={`/${page.url}`}>{page.title}</Link>
            //                 </div>
            //             ))}
            //         </div>
            //     </div>

            //     <hr/>
            //     <Switch>
            //         {pages.map(page =>
            //             <Route exact={page.exact} path={`/${page.url}`} component={page.component}/>
            //         )}
            //         <Route component={NotFound}/>
            //     </Switch>
            // </div>
            <Nav pages={pages}/>
        );
    }
}

export default App;


/*
    Consider above how I pass extra `props` to the `SubNav` component (stateless),
    whilst sacrificing some built-in `props` such as `match`, provided by `React-Router`.
    I did some lookup about that issue, found some answer but did not quite work for me.
    It MIGHT be because I am using stateless component (`SubNav`).
    Needs more experimenting.
*/
import React, {Component} from "react";
import {Route, Link, Switch} from "react-router-dom";

import Home from './Content/MainPages/Home';
import About from './Content/MainPages/About';
import SubNav from './Components/core/Nav/Nav';
import { NotFound } from './Components/core/NotFound/Page404';
import { topicsList } from './Content/Topics/Topics';

class App extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-2">
                            <Link to="/">Home</Link>
                        </div>
                        <div className="col-lg-12 col-md-2">
                            <Link to="/about">About</Link>
                        </div>
                        <div className="col-lg-12 col-md-2">
                            <Link to="/topics">Topics</Link>
                        </div>
                    </div>
                </div>

                <hr/>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/about" component={About}/>
                    <Route path="/topics" render={() => 
                        <SubNav title="Topics Title" url="/topics" navList={topicsList} defaultContent="Topics Content"/>
                    }/>
                    <Route component={NotFound}/>
                </Switch>
            </div>
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
import React, {Component} from "react";
import {Route, Link, Switch} from "react-router-dom";

import "style/bootstrap.css";
import "style/App.css";

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
                    <Route path="/topics" component={Topics}/>
                    <Route component={NotFound}/>
                </Switch>
            </div>
        );
    }
}

const Home = () => (
    <div>
        <h2>Home</h2>
    </div>
);

const About = () => (
    <div>
        <h2>About</h2>
    </div>
);

const topicsList = [
    {
        title: "Post 1",
        url: "post-1"
    }, {
        title: "Post 2",
        url: "post-2"
    }, {
        title: "Post 3",
        url: "post-3"
    }
];

const Topics = ({match}) => (
    <div>
        <div className="container-fluid">
            <h2>Topics</h2>
            <div className="row">
                {topicsList.map((l) => {
                    return (
                        <div className="col-lg-12">
                            <Link to={`${match.url}/${l.url}`}>{l.title}</Link>
                        </div>
                    )
                })}
            </div>
        </div>

        <Switch>
            <Route exact path={match.url} render={() => <h3>Please select a topic.</h3>}/> {topicsList.map((l) => {
                return (<Route path={`${match.url}/${l.url}`} component={Topic}/>)
            })}
            <Route path={`${match.url}/:NotFound`} component={NotFound}/>
        </Switch>
    </div>
);

const Topic = ({match}) => (
    <div>
        <h3>{match.url}</h3>
    </div>
);

const NotFound = ({match}) => {
    return (
        <div>
            <h2>Sorry, {match.url} not found! ERROR 404</h2>
        </div>
    )
}

export default App;

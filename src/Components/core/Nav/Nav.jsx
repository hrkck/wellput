import React from "react";
import {Link, Route, Switch} from 'react-router-dom';

export const Nav = (props) => {

    const navLinkArray = props
        .navList
        .map(l => (
            <div className="col-lg-12 col-md-2">
                {
                    l.url === ":NotFound"
                    ? null
                    : <Link to={`/${l.url}`}>{l.title}</Link>
                }
            </div>
        ))

    const navRouteArray = props
        .navList
        .map(l => <Route exact={l.exact} path={`/${l.url}`} component={l.component}/>)

    return (
        <div className="container-fluid">
            <div className="container">
                <div className="row">
                    {navLinkArray}
                </div>
            </div>
            <hr/>
            <Switch>
                {navRouteArray}
            </Switch>
        </div>
    );
}

export const SubNav = (props) => {

    const subNavLinkArray = props
        .navList
        .map(l => (
            <div className="col-lg-12 col-md-2">
                {
                    l.url === ":NotFound"
                    ? null
                    : <Link className="col-lg-12" to={`${props.url}/${l.url}`}>{l.title}</Link>
                }
            </div>
        ))

    const subNavRouteArray = props
        .navList
        .map(l => <Route path={`${props.url}/${l.url}`} render={l.component}/>)

    return (
        <div>
            <div className="container-fluid">
                <h2>{props.title}</h2>
                <div className="row">
                    {subNavLinkArray}
                </div>
            </div>
            <hr/>
            <Switch>
                <Route exact path={props.url} component={props.defaultComponent}/> 
                {subNavRouteArray}
            </Switch>
        </div>
    );
}

import React from "react";
import {Link, Route, Switch} from 'react-router-dom';
import {NotFound} from '../NotFound/Page404';

export const Nav = (props) => (
    <div className="container-fluid">
        <div className="container">
            <div className="row">
                {props
                    .navList
                    .map(l => (
                        <div className="col-lg-12 col-md-2">
                            <Link to={`/${l.url}`}>{l.title}</Link>
                        </div>
                    ))}
            </div>
        </div>

        <hr/>

        <Switch>
            {props
                .navList
                .map(l => <Route exact={l.exact} path={`/${l.url}`} component={l.component}/>)}
            <Route path={`/:NotFound`} component={NotFound}/>
        </Switch>
    </div>
);

export const SubNav = (props) => (
    <div>
        <div className="container-fluid">
            <h2>{props.title}</h2>
            <div className="row">
                {props
                    .navList
                    .map(l => (
                        <div className="col-lg-12 col-md-2">
                            <Link className="col-lg-12" to={`${props.url}/${l.url}`}>{l.title}</Link>
                        </div>
                    ))}
            </div>
        </div>
        <br/>
        <Switch>
            <Route exact path={props.url} component={props.defaultComponent}/>
            {props
                .navList
                .map(l => <Route path={`${props.url}/${l.url}`} render={l.component}/>)}
            <Route path={`${props.url}/:NotFound`} component={NotFound}/>
        </Switch>
    </div>
);

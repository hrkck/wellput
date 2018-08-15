import React from "react";
import {Link, Route, Switch} from 'react-router-dom';
import { NotFound } from '../NotFound/Page404';

export const SubNav = (props) => (
    <div>
        {/* Beginning of sub navigation */}
        <div className="container-fluid">
            <h2>{props.title}</h2>
            <div className="row">
                {props
                    .navList
                    .map(l => 
                        <Link className="col-lg-12" to={`${props.url}/${l.url}`}>{l.title}</Link>
                    )
                }
            </div>
        </div>

        <Switch>
            <Route exact path={props.url} render={() => <h3>{props.defaultContent}</h3>}/>
            {props
                .navList
                .map(l => 
                    <Route path={`${props.url}/${l.url}`} render={l.component}/>
            )}
            <Route path={`${props.url}/:NotFound`} component={NotFound}/>
        </Switch>
    </div>
);


export const Nav = (props) => (
    <div className="container-fluid">
        <div className="container">
            <div className="row">
                {props.pages.map(page => (
                    <div className="col-lg-12 col-md-2">
                        <Link to={`/${page.url}`}>{page.title}</Link>
                    </div>
                ))}
            </div>
        </div>

        <hr/>
        <Switch>
            {props.pages.map(page =>
                <Route exact={page.exact} path={`/${page.url}`} component={page.component}/>
            )}
            <Route path={`/:NotFound`} component={NotFound}/>
        </Switch>
    </div>
);

import React from "react";
import {Link, Route, Switch} from 'react-router-dom';

const ACTIVE_LINK_CLASS = "nav-link active";
const INACTIVE_LINK_CLASS = "nav-link";

export const Nav = ({navList}) => {

    const url = window.location.href;

    const navLinkArray = navList.map(l => (
        <div className="nav-item">
            {l.url === ":NotFound"
                ? null
                : <Link
                    className={url.substring(url.lastIndexOf("/") + 1) === l.url
                    ? ACTIVE_LINK_CLASS
                    : INACTIVE_LINK_CLASS}
                    to={`/${l.url}`}>{l.title}</Link>
}
        </div>
    ))

    const navRouteArray = navList.map(l => <Route exact={l.exact} path={`/${l.url}`} component={l.component}/>)

    return (
        <div className="container-fluid">
            <div className="nav nav-pills py-2">
                {navLinkArray}
            </div>
            <hr/>
            <div className="container px-2 py-3 shadow">
                <Switch>
                    {navRouteArray}
                </Switch>
            </div>
        </div>
    );
}

export const SubNav = (props) => {

    const url = window.location.href;

    const subNavLinkArray = props
        .navList
        .map(l => (
            <div className="nav-item">
                {l.url === ":NotFound"
                    ? null
                    : <Link
                        className={url.substring(url.lastIndexOf("/") + 1) === l.url
                        ? ACTIVE_LINK_CLASS
                        : INACTIVE_LINK_CLASS}
                        to={`${props.url}/${l.url}`}>{l.title}</Link>
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
                <div className="nav nav-pills flex-column py-2 col-2">
                    {subNavLinkArray}
                </div>
            </div>
            <hr/>
            <Switch>
                <Route exact path={props.url} component={props.defaultComponent}></Route>
                {subNavRouteArray}
            </Switch>
        </div>
    );
}

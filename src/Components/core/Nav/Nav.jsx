import React from "react";
import {Link, Route, Switch} from 'react-router-dom';

const ACTIVE_LINK_CLASS = "nav-link active";
const INACTIVE_LINK_CLASS = "nav-link";

const NavItem = props => {
    return (
        <div class="nav-item">
            {props.children}
        </div>
    )
}

export const Nav = ({navList}) => {

    let url = window.location.href;
    url = url.substring(url.lastIndexOf("/") + 1); // cut the word after the last `/`

    const navLinkArray = navList.map(l => (
        <NavItem>
            {l.url === ":NotFound"
                ? null
                : <Link
                    className={url === l.url
                    ? ACTIVE_LINK_CLASS
                    : INACTIVE_LINK_CLASS}
                    to={`/${l.url}`}>{l.title}</Link>
}
        </NavItem>
    ))

    const navRouteArray = navList.map(l => <Route exact={l.exact} path={`/${l.url}`} component={l.component}/>)

    return (
        <div className="container-fluid">
            <div className="nav nav-pills py-2">
                {navLinkArray}
            </div>
            <hr/>
            <div className="container px-2 py-3 shadow" style={{minHeight: "90vh"}}>
                <Switch>
                    {navRouteArray}
                </Switch>
            </div>
        </div>
    );
}

export const SubNav = ({navList, baseUrl, title, defaultComponent}) => {

    let url = window.location.href;
    url = url.substring(url.lastIndexOf("/")); // cut the word after the last `/`

    const subNavLinkArray = navList.map(l => (
        <NavItem>
            {l.url === ":NotFound"
                ? null
                : <Link className={INACTIVE_LINK_CLASS} to={`${baseUrl}/${l.url}`}>{l.title}</Link>
}
        </NavItem>
    ))

    const subNavRouteArray = navList.map(l => <Route path={`${baseUrl}/${l.url}`} render={l.component}/>)

    return (
        <div className="row">
            <div className="col-sm-12 col-lg-4">
                <h2>{title}</h2>
                <div className="nav nav-pills flex-column py-2 col-6">
                    {url === baseUrl
                        ? subNavLinkArray
                        : <NavItem>
                            <Link className={ACTIVE_LINK_CLASS} to={`${baseUrl}`}>go back</Link>
                        </NavItem>}
                </div>
            </div>
            <div className="col-sm-12 col-lg-8 pt-3" style={{minHeight: "90vh"}}>
                <Switch>
                    {url === baseUrl
                        ? <Route exact path={baseUrl} component={defaultComponent}></Route>
                        : subNavRouteArray}
                </Switch>
            </div>
        </div>
    );
}

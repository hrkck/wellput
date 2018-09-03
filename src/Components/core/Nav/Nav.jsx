import React from "react";
import {Link, Route, Switch} from 'react-router-dom';

const ACTIVE = "nav-link active";
const INACTIVE = "nav-link";

const MyLink = ({url, l_url, to, title}) => <Link className={url===l_url ? ACTIVE : INACTIVE} to={to}>{title}</Link>
        // if both url and l_url props are not defined, default value
        // of the ternary op is `ACTIVE`

export const Navigation = ({navList}) => {
    let url = window.location.href;
    url = url.substring(url.lastIndexOf("/") + 1); // cut the word after the last `/`

    const linkArray = navList.map(l =>
        <div class="nav-item">
            {l.url === ":NotFound"
                ? null
                : <MyLink url={url} l_url={l.url} to={`/${l.url}`} title={l.title}/>
            }
        </div>
    )
    
    return (
        <div className="container nav nav-pills py-2 px-3">
            {linkArray}
        </div>
    );
}

export const Pages = ({pagesList}) => {
    const routeArray = pagesList.map(l => <Route exact={l.exact} path={`/${l.url}`} component={l.component}/>)

    return (
        <Switch>
            {routeArray}
        </Switch>
    )
}

export const SubNavigation = ({navList, baseUrl, title}) => {
    let url = window.location.href;
    url = url.substring(url.lastIndexOf("/")); // cut the word after the last `/`

    const linkArray = navList.map(l => 
        <div className="nav-item">
            {l.url === ":NotFound"
                ? null
                : <MyLink url={url} to={`${baseUrl}/${l.url}`} title={l.title} />
            }
        </div>
    )

    return (
        <div className="nav-pills flex-column col-12 col-md-3 py-3 shadow" style={{borderRadius: "25px"}}>
            <h2>{title}</h2>
            {url === baseUrl
                ? linkArray
                : <div className="nav-item">
                    <MyLink to={`${baseUrl}`} title="go back" />
                </div>}
        </div>
    );
}

export const SubPages = ({pagesList, baseUrl, render}) => {
    const routeArray = pagesList.map(l => <Route path={`${baseUrl}/${l.url}`} render={l.component}/>)

    return(
        <div className="col-12 col-md-9 px-5 w-75">
            <Switch>
                {routeArray}
                <Route path={`${baseUrl}`} render={render}/>
            </Switch>
        </div>
    )
}

import React from "react";
import {Link} from 'react-router-dom';

import {generateLinks} from './generateLinks';

// To understand what the heck is happening below:
// https://stackoverflow.com/questions/32370994/how-to-pass-props-to-this-props-children#32371612
export const SubNavigation = ({children, baseUrl}) => {
    return (
        <div className="nav-pills col-12 col-md-3 py-3 shadow border-radius-4">
            {React.Children.map(children, child => React.cloneElement(child, {baseUrl: baseUrl}))}
        </div>
    );
}


export const SubNav = ({navList, title, baseUrl}) => {
    let url = window.location.href;
    url = url.substring(url.lastIndexOf("/"));
    let loc = baseUrl.substring(baseUrl.lastIndexOf("/")); // location

    return(
        <div className="nav flex-column">
            <h2>{title}</h2>
            {url === loc
                ? generateLinks(navList, baseUrl)
                : <Link className="nav-link text-success" to={`${baseUrl}`}>go back</Link>

            }
            <hr/>
        </div>
    )
}
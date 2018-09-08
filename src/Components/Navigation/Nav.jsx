import React from "react";
import {Link} from 'react-router-dom';

import {generateLinks} from './generateLinks';


export const Navigation = ({navList}) => {
    return (
        <div className="container nav nav-pills py-2 px-3">
            {generateLinks(navList)}
        </div>
    );
}


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

    return(
        <div>
            <h2>{title}</h2>
            {
                url === baseUrl
                ? generateLinks(navList, baseUrl)
                :   <div className="nav-item">
                        <Link className="nav-link active" to={`${baseUrl}`}>go back</Link>
                    </div>
            }
            <hr/>
        </div>
    )
}





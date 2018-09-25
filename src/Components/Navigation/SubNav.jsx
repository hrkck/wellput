import React from "react";
import {Link} from 'react-router-dom';

import {generateLinks} from './generateLinks';


export const SubNavigation = ({navList, title, baseUrl}) => {
    let url = window.location.href;
    url = url.substring(url.lastIndexOf("/"));
    let loc = baseUrl.substring(baseUrl.lastIndexOf("/")); // location

    return(
        <div className="nav-pills col-12 col-md-3 py-3 shadow">
            <div className="nav flex-column">
                <h3>{title}</h3>
                {url === loc
                    ? generateLinks(navList, baseUrl, true)
                    : <Link className="nav-link text-success" to={`${baseUrl}`}>go back</Link>
                }
                <hr/>
            </div>
        </div>
    )
}
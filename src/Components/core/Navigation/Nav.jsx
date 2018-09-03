import React from "react";
import {Link} from 'react-router-dom';

const ACTIVE = "nav-link active";
const INACTIVE = "nav-link";


const MyLink = ({url, l_url, to, title}) => {
    return(
        <Link className={url===l_url ? ACTIVE : INACTIVE} to={to}>{title}</Link>
    )
}
// if both url and l_url props are not defined, default value
// of the ternary op is `ACTIVE`

let generateLinks = (list, url, baseUrl = "") => 
    list.map(l => 
        <div className="nav-item">
            {
                l.url === ":NotFound"
                    ? null
                    : <MyLink url={url} l_url={l.url} to={`${baseUrl}/${l.url}`} title={l.title}/>
            }
        </div>
    )


export const Navigation = ({navList}) => {
    let url = window.location.href;
    url = url.substring(url.lastIndexOf("/") + 1); // cut the word after the last `/`

    const linkArray = generateLinks(navList, url);
    
    return (
        <div className="container nav nav-pills py-2 px-3">
            {linkArray}
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

    const linkArray = generateLinks(navList, url, baseUrl);

    return(
        <div>
            <h2>{title}</h2>
            {url === baseUrl
                ? linkArray
                :   <div className="nav-item">
                        <MyLink to={`${baseUrl}`} title="go back" />
                    </div>
            }
            <hr/>
        </div>
    )
}





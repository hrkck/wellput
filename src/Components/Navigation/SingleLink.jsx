import React from 'react';
import {Link} from 'react-router-dom';

// if both url and link_url props are not defined, default value
// of the ternary op is `active`

const SingleLink = ({link_url, to, title, isDropDown = false}) =>{
    let url = window.location.href;
    url = url.substring(url.lastIndexOf("/") + 1); // cut the word after the last `/`
    
    return  link_url === ":NotFound"
           ? null
           : <Link className={`
                ${
                    url === link_url 
                    ? "text-success" 
                    : "text-primary"
                } 
                ${ 
                    isDropDown 
                    ? "dropdown-item" 
                    : ""
                }`} 
                to={to}
            >{title}</Link>
}
    


export default SingleLink;
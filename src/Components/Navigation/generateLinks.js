import React from 'react';

import SingleLink from "./SingleLink";
import DropDown from "./DropDown";

export let generateLinks = (links, baseUrl = "") => 
    links.map(link => 
        <div className="nav-item">
            {
                link.dropDown !== undefined 
                ? <DropDown link_url={link.url} dropDownList={link.dropDown} baseUrl={baseUrl} title={link.title}/> 
                : <SingleLink link_url={link.url} to={`${baseUrl}/${link.url}`} title={link.title}/>
            }
        </div>
    )
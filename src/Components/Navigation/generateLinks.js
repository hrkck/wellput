import React from 'react';

import SingleLink from "./SingleLink";
import DropDown from "./DropDown";

export let generateLinks = (links, baseUrl = "") => 
    links.map(link => 
        <div className="col-12 col-md-auto" key={`${baseUrl}/${link.url}`}>
            {
                link.dropDown !== undefined 
                ? <DropDown link_url={link.url} dropDownList={link.dropDown} baseUrl={baseUrl} title={link.title}/> 
                : <SingleLink link_url={link.url} to={`${baseUrl}/${link.url}`} title={link.title}/>
            }
        </div>
    )
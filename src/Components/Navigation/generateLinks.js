import React from 'react';

import SingleLink from "./SingleLink";
import DropDown from "./DropDown";

export const generateLinks = (links, baseUrl = "", subNav = false) => {
    const generatedLinks = [];
    for(let link in links){
        link = links[link]
        generatedLinks.push(
            <div className="col-12 col-md-auto" key={`${baseUrl}/${link.url}`}>
                {
                    link.subtitle !== undefined ?
                    <div><br/><h5>{link.subtitle}</h5></div>
                    : link.dropDown !== undefined
                    ? <DropDown link_url={link.url} dropDownList={link.dropDown} baseUrl={baseUrl} title={link.title}/> 
                    : <SingleLink link_url={link.url} to={`${baseUrl}/${link.url}`} title={`${subNav?"•":""} ${link.title}`}/>
                }
            </div>
        )
    }
    console.log(generatedLinks)
    return generatedLinks
}
    // links.map(link => 
    //     <div className="col-12 col-md-auto" key={`${baseUrl}/${link.url}`}>
    //         {
    //             link.subtitle !== undefined ?
    //             <div><br/><h5>{link.subtitle}</h5></div>
    //             : link.dropDown !== undefined
    //             ? <DropDown link_url={link.url} dropDownList={link.dropDown} baseUrl={baseUrl} title={link.title}/> 
    //             : <SingleLink link_url={link.url} to={`${baseUrl}/${link.url}`} title={`${subNav?"•":""} ${link.title}`}/>
    //         }
    //     </div>
    // )
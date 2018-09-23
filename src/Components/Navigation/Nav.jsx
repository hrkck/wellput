import React from "react";

import {generateLinks} from './generateLinks';


export const Navigation = ({navList}) => {
    return (
        <div className="container nav nav-pills mt-2">
            <div className="row mx-1 align-items-center ">
                {generateLinks(navList)}
            </div>
        </div>
    );
}




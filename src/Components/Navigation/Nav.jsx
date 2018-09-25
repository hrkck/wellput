import React from "react";
import { Link } from "react-router-dom";

import {generateLinks} from './generateLinks';


const Brand = () =>
    <Link to="/">
        <div className="brand text-center mr-5 ml-3">
            <span>This is </span>
            <h3 className="text-info">Well Put</h3>
        </div>
    </Link>



export const Navigation = ({navList}) => {
    return (
        <div className="container nav nav-pills mt-2">
            <div className="row ml-1 align-items-center ">
                <Brand/>
                {generateLinks(navList)}
            </div>
        </div>
    );
}




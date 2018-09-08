import React from "react";
import {Route, Switch} from 'react-router-dom';


export const DropDownRoutes = ({pagesList, baseUrl, render}) => {
    const routeArray = pagesList.map(l => <Route path={`${baseUrl}/${l.url}`} render={l.component}/>)

    return(
        
            <Switch>
                {routeArray}
                <Route path={`${baseUrl}`} render={render}/>
            </Switch>
        
    )
}
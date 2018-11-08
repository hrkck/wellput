import React from "react";
import {Route, Switch} from 'react-router-dom';

export const Routes = ({pagesList}) => {

    const routeArray = []

    for(let l in pagesList){
        routeArray.push(
            <Route exact={l.exact} path={`/${l.url}`} key={`${l.url}`} component={l.component}/>
        )
    }

    return (
        <Switch>
            {routeArray}
        </Switch>
    )
}
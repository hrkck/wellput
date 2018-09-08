import React from "react";
import {Route, Switch} from 'react-router-dom';

export const Routes = ({pagesList}) => {
    const routeArray = pagesList.map(l => <Route exact={l.exact} path={`/${l.url}`} component={l.component}/>)

    return (
        <Switch>
            {routeArray}
        </Switch>
    )
}
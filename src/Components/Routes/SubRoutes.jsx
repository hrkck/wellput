import React from "react";
import {Route, Switch} from 'react-router-dom';
import Page from "../Page/Page";

export const SubRoutes = ({pagesList, baseUrl, render}) => {
    const routeArray = pagesList.map(l => <Route path={`${baseUrl}/${l.url}`} key={`${baseUrl}/${l.url}`} render={l.component}/>)

    return(
        <Page className="col-12 col-md-9">
            <Switch>
                {routeArray}
                <Route path={`${baseUrl}`} render={render}/>
            </Switch>
        </Page>
    )
}
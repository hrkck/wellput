import React from 'react';
import Page from '../../Components/Page/Page';
import {DropDownRoutes} from '../../Components/Routes/DropDownRoutes';

import {nav} from '../nav';

const Projects = () =>
    <DropDownRoutes baseUrl="/projects" pagesList={nav.main[1].dropDown} render={() => {
        return(
            <Page>
                <h2>
                    Projects...
                </h2>
            </Page>
        )
    }}/>
        

export default Projects;
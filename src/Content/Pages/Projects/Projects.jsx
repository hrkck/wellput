import React from 'react';
import Page from '../../../Components/Page/Page';
import {DropDownRoutes} from '../../../Components/Routes/DropDownRoutes';

import {projectsDropDown} from '../../Navigation/Projects/projectsDropDown';

const Projects = () =>
    <DropDownRoutes baseUrl="/projects" pagesList={projectsDropDown} render={() => {
        return(
            <Page>
                <h2>
                    Projects...
                </h2>
            </Page>
        )
    }}/>
        

export default Projects;
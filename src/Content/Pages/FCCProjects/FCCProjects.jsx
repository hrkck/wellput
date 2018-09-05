import React from 'react';
import {projectsList} from '../../Navigation/FCCProjects';
import {SubNavigation, SubNav} from '../../../Components/core/Navigation/Nav';
import {SubRoutes} from '../../../Components/core/Routes/Routes';

import Page from '../../../Components/core/Page/Page';

const FCCProjects = () => {
    return (
        <Page>
            <SubNavigation baseUrl="/FCCProjects">
                <SubNav title="Projects List" navList={projectsList}/>
            </SubNavigation>
            <SubRoutes baseUrl="/FCCProjects" pagesList={projectsList} render={()=>{
                return(
                    <div>
                        <h2>FCC Projects</h2>
                    </div>
                )
            }} />
        </Page>
    );
};

export default FCCProjects;
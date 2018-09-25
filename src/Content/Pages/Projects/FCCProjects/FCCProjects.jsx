import React from 'react';
import {SubNavigation} from '../../../../Components/Navigation/SubNav';
import {SubRoutes} from '../../../../Components/Routes/SubRoutes';
import Page from '../../../../Components/Page/Page';

import {frontEndProjects} from '../../../Navigation/Projects/FCCProjects/frontEndProjects';

const FCCProjects = () => {
    return (
        <Page sub={true}>
            <SubNavigation title="Projects List" navList={frontEndProjects} baseUrl="/projects/FCCProjects"/>
            <SubRoutes baseUrl="/projects/FCCProjects" pagesList={frontEndProjects} render={()=>{
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
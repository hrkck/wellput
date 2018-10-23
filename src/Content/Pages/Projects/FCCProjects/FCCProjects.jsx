import React from 'react';
import {SubNavigation} from '../../../../Components/Navigation/SubNav';
import {SubRoutes} from '../../../../Components/Routes/SubRoutes';
import Page from '../../../../Components/Page/Page';

import {nav} from '../../../Navigation/nav';

const FCCProjects = () => {
    return (
        <Page sub={true}>
            <SubNavigation title="Projects List" navList={nav.main[1].dropDown[1].posts} baseUrl="/projects/FCCProjects"/>
            <SubRoutes baseUrl="/projects/FCCProjects" pagesList={nav.main[1].dropDown[1].posts} render={()=>{
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
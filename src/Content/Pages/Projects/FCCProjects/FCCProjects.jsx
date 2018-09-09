import React from 'react';
import {SubNavigation, SubNav} from '../../../../Components/Navigation/SubNav';
import {SubRoutes} from '../../../../Components/Routes/SubRoutes';
import Page from '../../../../Components/Page/Page';

import {frontEndProjects} from '../../../Navigation/Projects/FCCProjects/frontEndProjects';

const FCCProjects = () => {
    return (
        <Page>
            <SubNavigation baseUrl="/projects/FCCProjects">
                <SubNav title="Projects List" navList={frontEndProjects}/>
            </SubNavigation>
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
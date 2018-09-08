import React from 'react';
import {frontEndProjects} from '../../Navigation/FCCProjects/frontEndProjects';
import {SubNavigation, SubNav} from '../../../Components/Navigation/SubNav';
import {SubRoutes} from '../../../Components/Routes/SubRoutes';

import Page from '../../../Components/Page/Page';

const FCCProjects = () => {
    return (
        <Page>
            <SubNavigation baseUrl="/FCCProjects">
                <SubNav title="Projects List" navList={frontEndProjects}/>
            </SubNavigation>
            <SubRoutes baseUrl="/FCCProjects" pagesList={frontEndProjects} render={()=>{
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
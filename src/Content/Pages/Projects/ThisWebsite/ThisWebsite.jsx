import React from 'react';
import {SubNavigation} from '../../../../Components/Navigation/SubNav';
import {SubRoutes} from '../../../../Components/Routes/SubRoutes';
import Page from '../../../../Components/Page/Page';

import {ThisWebsite} from '../../../Navigation/Projects/ThisWebsite/thisWebsite';

const FCCProjects = () => {
    return (
        <Page sub={true}>
            <SubNavigation title="Posts" navList={ThisWebsite} baseUrl="/projects/ThisWebsite"/>
            <SubRoutes baseUrl="/projects/ThisWebsite" pagesList={ThisWebsite} render={()=>{
                return(
                    <div>
                        <div className="brand text-danger">
                            <h2>This Website</h2>
                        </div>

                        <p>This will be some sort of documentation/brainstorming/planning/breaking-and-remaking of this website.</p>
                        <p>
                            <ul>
                                <li>posts need a date stamp</li>
                                <li>posts need disqus integration</li>
                                <li>all navigation should push themselves to the bottom when the site is viewed on phone.</li>
                            </ul>
                            and maybe...
                            <ul>
                                <li>creating a new page is tedious. Although straightforward. Could it be made easier?
                                </li>
                            </ul>
                        </p>
                    </div>
                )
            }} />
        </Page>
    );
};

export default FCCProjects;
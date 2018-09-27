import React from 'react';
import {SubNavigation} from '../../../../Components/Navigation/SubNav';
import {SubRoutes} from '../../../../Components/Routes/SubRoutes';
import Page from '../../../../Components/Page/Page';

import { informatikUndWirtschaftPosts } from "../../../Navigation/BSc/InformatikUndWirtschaft/InformatikUndWirtschaft";

const InformatikUndWirtschaft = () => {
    return (
        <Page sub={true}>
            <SubNavigation
                title="Weeks of notes will appear below as posts"
                navList={informatikUndWirtschaftPosts} 
                baseUrl="/BSc/InformatikUndWirtschaft"/>
            <SubRoutes
                baseUrl="/BSc/InformatikUndWirtschaft"
                pagesList={informatikUndWirtschaftPosts}
                render={() => {
                return (
                    <div className="">
                        <h2>InformatikUndWirtschaft</h2>
                    </div>
                )
            }}/>
        </Page>
    );
};

export default InformatikUndWirtschaft;
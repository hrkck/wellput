import React from 'react';
import {SubNavigation} from '../../../../Components/Navigation/SubNav';
import {SubRoutes} from '../../../../Components/Routes/SubRoutes';
import Page from '../../../../Components/Page/Page';

import { nav } from "../../../Navigation/nav";

const InformatikUndWirtschaft = () => {
    return (
        <Page sub={true}>
            <SubNavigation
                title="Weeks of notes will appear below as posts"
                navList={nav.main[2].dropDown[3].posts} 
                baseUrl="/BSc/InformatikUndWirtschaft"/>
            <SubRoutes
                baseUrl="/BSc/InformatikUndWirtschaft"
                pagesList={nav.main[2].dropDown[3].posts}
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
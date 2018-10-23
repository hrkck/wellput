import React from 'react';
import {SubNavigation} from '../../../../Components/Navigation/SubNav';
import {SubRoutes} from '../../../../Components/Routes/SubRoutes';
import Page from '../../../../Components/Page/Page';

import { nav } from "../../../Navigation/nav";

const Informatik_I = () => {
    return (
        <Page sub={true}>
            <SubNavigation
                title="Weeks of notes will appear below as posts"
                navList={nav.main[2].dropDown[2].posts} 
                baseUrl="/BSc/Informatik_I"/>
            <SubRoutes
                baseUrl="/BSc/Informatik_I"
                pagesList={nav.main[2].dropDown[2].posts}
                render={() => {
                return (
                    <div className="">
                        <h2>Informatik_I</h2>
                    </div>
                )
            }}/>
        </Page>
    );
};

export default Informatik_I;
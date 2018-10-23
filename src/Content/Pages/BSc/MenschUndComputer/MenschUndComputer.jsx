import React from 'react';
import {SubNavigation} from '../../../../Components/Navigation/SubNav';
import {SubRoutes} from '../../../../Components/Routes/SubRoutes';
import Page from '../../../../Components/Page/Page';

import { nav } from "../../../Navigation/nav";

const MenschUndComputer = () => {
    return (
        <Page sub={true}>
            <SubNavigation
                title="Weeks of notes will appear below as posts"
                navList={nav.main[2].dropDown[5].posts} 
                baseUrl="/BSc/MenschUndComputer"/>
            <SubRoutes
                baseUrl="/BSc/MenschUndComputer"
                pagesList={nav.main[2].dropDown[5].posts}
                render={() => {
                return (
                    <div className="">
                        <h2>MenschUndComputer</h2>
                    </div>
                )
            }}/>
        </Page>
    );
};

export default MenschUndComputer;
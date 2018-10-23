import React from 'react';
import {SubNavigation} from '../../../../Components/Navigation/SubNav';
import {SubRoutes} from '../../../../Components/Routes/SubRoutes';
import Page from '../../../../Components/Page/Page';

import { nav } from "../../../Navigation/nav";

const Mikrooekonomik_I = () => {
    return (
        <Page sub={true}>
            <SubNavigation
                title="Weeks of notes will appear below as posts"
                navList={nav.main[2].dropDown[6].posts} 
                baseUrl="/BSc/Mikrooekonomik_I"/>
            <SubRoutes
                baseUrl="/BSc/Mikrooekonomik_I"
                pagesList={nav.main[2].dropDown[6].posts}
                render={() => {
                return (
                    <div className="">
                        <h2>Mikrooekonomik_I</h2>
                    </div>
                )
            }}/>
        </Page>
    );
};

export default Mikrooekonomik_I;
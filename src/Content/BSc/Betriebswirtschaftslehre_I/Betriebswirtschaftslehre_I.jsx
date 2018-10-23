import React from 'react';
import {SubNavigation} from '../../../Components/Navigation/SubNav';
import {SubRoutes} from '../../../Components/Routes/SubRoutes';
import Page from '../../../Components/Page/Page';

import { nav } from "../../nav";

const Betriebswirtschaftslehre_I = () => {
    return (
        <Page sub={true}>
            <SubNavigation
                title="Weeks of notes will appear below as posts"
                navList={nav.main[2].dropDown[1].posts} 
                baseUrl="/BSc/Betriebswirtschaftslehre_I"/>
            <SubRoutes
                baseUrl="/BSc/Betriebswirtschaftslehre_I"
                pagesList={nav.main[2].dropDown[1].posts}
                render={() => {
                return (
                    <div className="">
                        <h2>Betriebswirtschaftslehre_I</h2>
                    </div>
                )
            }}/>
        </Page>
    );
};

export default Betriebswirtschaftslehre_I;
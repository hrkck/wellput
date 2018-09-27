import React from 'react';
import {SubNavigation} from '../../../../Components/Navigation/SubNav';
import {SubRoutes} from '../../../../Components/Routes/SubRoutes';
import Page from '../../../../Components/Page/Page';

import { betriebswirtschaftslehrePosts } from "../../../Navigation/BSc/Betriebswirtschaftslehre_I/Betriebswirtschaftslehre_I";

const Betriebswirtschaftslehre_I = () => {
    return (
        <Page sub={true}>
            <SubNavigation
                title="Weeks of notes will appear below as posts"
                navList={betriebswirtschaftslehrePosts} 
                baseUrl="/BSc/Betriebswirtschaftslehre_I"/>
            <SubRoutes
                baseUrl="/BSc/Betriebswirtschaftslehre_I"
                pagesList={betriebswirtschaftslehrePosts}
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
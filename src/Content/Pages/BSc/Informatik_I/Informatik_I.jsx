import React from 'react';
import {SubNavigation} from '../../../../Components/Navigation/SubNav';
import {SubRoutes} from '../../../../Components/Routes/SubRoutes';
import Page from '../../../../Components/Page/Page';

import { informatikPosts } from "../../../Navigation/BSc/Informatik_I/Informatik_I";

const Informatik_I = () => {
    return (
        <Page sub={true}>
            <SubNavigation
                title="Weeks of notes will appear below as posts"
                navList={informatikPosts} 
                baseUrl="/BSc/Informatik_I"/>
            <SubRoutes
                baseUrl="/BSc/Informatik_I"
                pagesList={informatikPosts}
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
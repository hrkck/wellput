import React from 'react';
import {SubNavigation} from '../../../../Components/Navigation/SubNav';
import {SubRoutes} from '../../../../Components/Routes/SubRoutes';
import Page from '../../../../Components/Page/Page';

import { mathematikPosts } from "../../../Navigation/BSc/Mathematik_I/Mathematik_I";

const Mathematik_I = () => {
    return (
        <Page sub={true}>
            <SubNavigation
                title="Weeks of notes will appear below as posts"
                navList={mathematikPosts} 
                baseUrl="/BSc/Mathematik_I"/>
            <SubRoutes
                baseUrl="/BSc/Mathematik_I"
                pagesList={mathematikPosts}
                render={() => {
                return (
                    <div className="">
                        <h2>Mathematik_I</h2>
                    </div>
                )
            }}/>
        </Page>
    );
};

export default Mathematik_I;
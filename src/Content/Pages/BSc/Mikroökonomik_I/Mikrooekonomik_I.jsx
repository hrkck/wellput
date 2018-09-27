import React from 'react';
import {SubNavigation} from '../../../../Components/Navigation/SubNav';
import {SubRoutes} from '../../../../Components/Routes/SubRoutes';
import Page from '../../../../Components/Page/Page';

import { mikrooekonomikPosts } from "../../../Navigation/BSc/Mikrooekonomik_I/Mikrooekonomik_I";

const Mikrooekonomik_I = () => {
    return (
        <Page sub={true}>
            <SubNavigation
                title="Weeks of notes will appear below as posts"
                navList={mikrooekonomikPosts} 
                baseUrl="/BSc/Mikrooekonomik_I"/>
            <SubRoutes
                baseUrl="/BSc/Mikrooekonomik_I"
                pagesList={mikrooekonomikPosts}
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
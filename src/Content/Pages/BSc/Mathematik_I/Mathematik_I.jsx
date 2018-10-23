import React from 'react';
import {SubNavigation} from '../../../../Components/Navigation/SubNav';
import {SubRoutes} from '../../../../Components/Routes/SubRoutes';
import Page from '../../../../Components/Page/Page';

import { nav } from "../../../Navigation/nav";

const Mathematik_I = () => {
    return (
        <Page sub={true}>
            <SubNavigation
                title="Posts"
                navList={nav.main[2].dropDown[4].posts} 
                baseUrl="/BSc/Mathematik_I"/>
            <SubRoutes
                baseUrl="/BSc/Mathematik_I"
                pagesList={nav.main[2].dropDown[4].posts}
                render={() => {
                return (
                    <div className="">
                        <h2>Mathematik I</h2>
                        <p>Hier kann ich alle Notizen von Vorlesung Math I finden, die ich aufgenommen habe.</p>
                    </div>
                )
            }}/>
        </Page>
    );
};

export default Mathematik_I;
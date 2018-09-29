import React from 'react';
import {SubNavigation} from '../../../../Components/Navigation/SubNav';
import {SubRoutes} from '../../../../Components/Routes/SubRoutes';
import Page from '../../../../Components/Page/Page';

import { week1} from "../../../Navigation/BSc/Mathematik_I/Mathematik_I";


const Mathematik_I = () => {
    return (
        <Page sub={true}>
            <SubNavigation
                title="Posts"
                navList={week1} 
                baseUrl="/BSc/Mathematik_I"/>
            <SubRoutes
                baseUrl="/BSc/Mathematik_I"
                pagesList={week1}
                render={() => {
                return (
                    <div className="">
                        <h2>Mathematik I</h2>
                    </div>
                )
            }}/>
        </Page>
    );
};

export default Mathematik_I;
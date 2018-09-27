import React from 'react';
import {SubNavigation} from '../../../../Components/Navigation/SubNav';
import {SubRoutes} from '../../../../Components/Routes/SubRoutes';
import Page from '../../../../Components/Page/Page';

import { menschUndComputerPosts } from "../../../Navigation/BSc/MenschUndComputer/MenschUndComputer";

const MenschUndComputer = () => {
    return (
        <Page sub={true}>
            <SubNavigation
                title="Weeks of notes will appear below as posts"
                navList={menschUndComputerPosts} 
                baseUrl="/BSc/MenschUndComputer"/>
            <SubRoutes
                baseUrl="/BSc/MenschUndComputer"
                pagesList={menschUndComputerPosts}
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
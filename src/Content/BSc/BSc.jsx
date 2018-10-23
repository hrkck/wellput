import React from 'react';
import Page from '../../Components/Page/Page';
import {DropDownRoutes} from '../../Components/Routes/DropDownRoutes';

import {nav} from '../nav';

const BSc = () =>
    <DropDownRoutes baseUrl="/BSc" pagesList={nav.main[2].dropDown} render={() => {
        return(
            <Page>
                <h1>BSc Notes</h1>

                <p>For any resources from UZH, refer to <a href="https://lms.uzh.ch/dmz/" target="_blank" rel="noopener noreferrer">OLAT page</a></p>
            </Page>
        )
    }}/>

export default BSc;
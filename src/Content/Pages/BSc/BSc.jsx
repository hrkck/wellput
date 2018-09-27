import React from 'react';
import Page from '../../../Components/Page/Page';
import {DropDownRoutes} from '../../../Components/Routes/DropDownRoutes';

import {BScDropDown} from '../../Navigation/BSc/BScDropDown';

const BSc = () =>
    <DropDownRoutes baseUrl="/BSc" pagesList={BScDropDown} render={() => {
        return(
            <Page>
                <h1>BSc Notes</h1>
            </Page>
        )
    }}/>

export default BSc;
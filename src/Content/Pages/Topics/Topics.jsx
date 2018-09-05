import React from 'react';
import {topicsList} from '../../Navigation/topicsList';
import {SubNavigation, SubNav} from '../../../Components/core/Navigation/Nav';
import {SubRoutes} from '../../../Components/core/Routes/Routes';

import Page from '../../../Components/core/Page/Page';

const Topics = () => {
    return (
        <Page>
            <SubNavigation baseUrl="/topics">
                <SubNav title="Topics Title" navList={topicsList}/>
            </SubNavigation>
            <SubRoutes baseUrl="/topics" pagesList={topicsList} render={()=>{
                return(
                    <div>
                        <h2>Default topics page</h2>
                    </div>
                )
            }} />
        </Page>
    );
};

export default Topics;
import React from 'react';
import {topicsList} from '../Navigation/topicsList';
import {SubNavigation, SubPages} from '../../Components/core/Nav/Nav';

import Page from '../../Components/core/Page/Page';

const Topics = () => {
    return (
        <Page>
            <SubNavigation
                title="Topics Title"
                baseUrl="/topics"
                navList={topicsList}/>
            <SubPages baseUrl="/topics" pagesList={topicsList} />
        </Page>
    );
};

export default Topics;
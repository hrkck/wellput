import React from 'react';
import defaultComponent, {topicsList} from '../Navigation/topicsList';
import {SubNav} from '../../Components/core/Nav/Nav';

const Topics = () => {
    return (<SubNav
        title="Topics Title"
        baseUrl="/topics"
        navList={topicsList}
        defaultComponent={defaultComponent}/>);
};

export default Topics;
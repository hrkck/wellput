import React from 'react';
import defaultComponent, {topicsList} from '../Navigation/topicsList';
import {SubNav} from '../../Components/core/Nav/Nav';

const Topics = () => {
    return (<SubNav
        title="Topics Title"
        url="/topics"
        navList={topicsList}
        defaultComponent={defaultComponent}/>);
};

export default Topics;
import React from 'react';
// import {Route, Link, Switch} from "react-router-dom";
import { topicsList } from '../Topics/Topics';
import {SubNav} from '../../Components/core/Nav/Nav';

const Home = () => (
    <div>
        <h2>Home</h2>
    </div>
);

const Topics = () => {
    return (
        <SubNav title="Topics Title" url="/topics" navList={topicsList} defaultContent="Topics Content"/>
    );
};

export default Topics;
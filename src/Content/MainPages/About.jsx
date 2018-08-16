import React from 'react';
import {SubNav} from '../../Components/core/Nav/Nav';
import {cvList} from '../Navigation/cvList';

const About = () => {
    return (
        <div className="container">
            <h2>About</h2>

            <p></p>
            <SubNav title="English and German CV" url="/about" navList={cvList} />

        </div>
    )
};

export default About;
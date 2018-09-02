import React from 'react';

import {cvList} from '../Navigation/cvList';
import {SubNavigation} from '../../Components/core/Nav/Nav';
import {SubPages} from '../../Components/core/Nav/Nav';

import Page from '../../Components/core/Page/Page';


const About = () => {
    return (
        <Page>
            <SubNavigation title="English and German CV" baseUrl="/about" navList={cvList} />
            <SubPages baseUrl="/about" pagesList={cvList} render={()=>{
                return(
                    <h1>About me</h1>
                )
            }}/>
        </Page>
    )
};

export default About;
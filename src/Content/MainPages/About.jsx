import React from 'react';

import {cvList} from '../Navigation/cvList';
import {SubNavigation, SubNavChildren} from '../../Components/core/Nav/Nav';
import {SubPages} from '../../Components/core/Nav/Nav';

import Page from '../../Components/core/Page/Page';


const About = () => {
    return (
        <Page>
            <SubNavigation baseUrl="/about">
                <SubNavChildren title="English/German CV" navList={cvList}/>
                <SubNavChildren title="Again English/German CV" navList={cvList}/>
            </SubNavigation>
            <SubPages baseUrl="/about" pagesList={cvList} render={()=>{
                return(
                    <h1>About me</h1>
                )
            }}/>
        </Page>
    )
};

export default About;
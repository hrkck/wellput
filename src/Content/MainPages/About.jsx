import React from 'react';

import {cvList} from '../Navigation/cvList';
import {SubNavigation, SubNav} from '../../Components/core/Navigation/Nav';
import {SubRoutes} from '../../Components/core/Routes/Routes';

import Page from '../../Components/core/Page/Page';


const About = () => {
    return (
        <Page>
            <SubNavigation baseUrl="/about">
                <SubNav title="English/German CV" navList={cvList}/>
            </SubNavigation>
            <SubRoutes baseUrl="/about" pagesList={cvList} render={()=>{
                return(
                    <div>
                        <h2>Default about page</h2>
                    </div>
                )
            }}/>
        </Page>
    )
};

export default About;
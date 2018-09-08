import React from 'react';

import {cvList} from '../../Navigation/About/cvList';
import {SubNavigation, SubNav} from '../../../Components/Navigation/Nav';
import {SubRoutes} from '../../../Components/Routes/SubRoutes';

import Page from '../../../Components/Page/Page';


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
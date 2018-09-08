import React from 'react';
import {blenderProjects} from '../../Navigation/BlenderProjects/blenderProjects';
import {SubNavigation, SubNav} from '../../../Components/Navigation/Nav';
import {SubRoutes} from '../../../Components/Routes/SubRoutes';

import Page from '../../../Components/Page/Page';

import './assets/blenderProjects.css';

// import images:
import {list} from "./media/imagesList.js";


const imgList = (list) => 
    list.map((l)=>{
                return(
                    <div className="col-12">
                        <img src={l} alt={l} className="img"/>
                    </div>
                )
            })
        


const BlenderProjects = () => {
    return (
        <Page>
            <SubNavigation baseUrl="/BlenderProjects">
                <SubNav title="Currently, there is nothing to navigate! :)" navList={blenderProjects}/>
            </SubNavigation>
            <SubRoutes baseUrl="/BlenderProjects" pagesList={blenderProjects} render={()=>{
                return(
                    <div className="text-center">
                        <h2>Blender Projects - 2018</h2>
                        <main className="container-fluid">
                            {imgList(list)}
                        </main>
                    </div>
                )
            }} />
        </Page>
    );
};

export default BlenderProjects;
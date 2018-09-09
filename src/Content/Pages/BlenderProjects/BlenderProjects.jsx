import React from 'react';
import {blenderProjects} from '../../Navigation/BlenderProjects/blenderProjects';
import {SubNavigation, SubNav} from '../../../Components/Navigation/Nav';
import {SubRoutes} from '../../../Components/Routes/SubRoutes';

import Page from '../../../Components/Page/Page';

import './assets/blenderProjects.css';

// import images:
import {imgList} from "./media/imagesList";

const generateImageList = (list) => list.map(l => <img src={l} alt={l} className="img"/>)

const BlenderProjects = () => {
    return (
        <Page>
            <SubNavigation baseUrl="/BlenderProjects">
                <SubNav
                    title="Currently, there is nothing to navigate! :)"
                    navList={blenderProjects}/>
            </SubNavigation>
            <SubRoutes
                baseUrl="/BlenderProjects"
                pagesList={blenderProjects}
                render={() => {
                return (
                    <div className="text-center">
                        <h2>Blender Projects - 2018</h2>
                        <main className="container-fluid text-center">
                            {generateImageList(imgList)}
                        </main>
                    </div>
                )
            }}/>
        </Page>
    );
};

export default BlenderProjects;
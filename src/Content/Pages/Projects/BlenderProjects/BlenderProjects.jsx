import React from 'react';
import {SubNavigation, SubNav} from '../../../../Components/Navigation/SubNav';
import {SubRoutes} from '../../../../Components/Routes/SubRoutes';
import Page from '../../../../Components/Page/Page';

import {blenderProjects} from '../../../Navigation/Projects/BlenderProjects/blenderProjects';
import './assets/blenderProjects.css';
import {imgList} from "./media/imagesList";

const generateImageList = (list) => list.map(l => <img src={l} alt={l} key={l} className="img"/>)

const BlenderProjects = () => {
    return (
        <Page>
            <SubNavigation baseUrl="/projects/BlenderProjects">
                <SubNav
                    title="Currently, there is nothing to navigate! :)"
                    navList={blenderProjects}/>
            </SubNavigation>
            <SubRoutes
                baseUrl="/projects/BlenderProjects"
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
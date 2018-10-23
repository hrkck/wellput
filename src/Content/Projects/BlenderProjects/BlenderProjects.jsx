import React from 'react';
import {SubNavigation} from '../../../Components/Navigation/SubNav';
import {SubRoutes} from '../../../Components/Routes/SubRoutes';
import Page from '../../../Components/Page/Page';

import { nav } from "../../nav";
import './assets/blenderProjects.css';
import {imgList} from "./media/imagesList";

const generateImageList = (list) => list.map(l => <img src={l} alt={l} key={l} className="img"/>)

const BlenderProjects = () => {
    return (
        <Page sub={true}>
            <SubNavigation
                title="Currently, there is nothing to navigate! :)"
                navList={nav.main[1].dropDown[0].posts} 
                baseUrl="/projects/BlenderProjects"/>
            <SubRoutes
                baseUrl="/projects/BlenderProjects"
                pagesList={nav.main[1].dropDown[0].posts}
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
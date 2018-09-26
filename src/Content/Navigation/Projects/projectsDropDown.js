import BlenderProjects from '../../Pages/Projects/BlenderProjects/BlenderProjects';
import FCCProjects from '../../Pages/Projects/FCCProjects/FCCProjects';
import ThisWebsite from '../../Pages/Projects/ThisWebsite/ThisWebsite';

import {NotFound} from '../../../Components/NotFound/Page404';

export const projectsDropDown = [
    {
        title: "BlenderProjects",
        url: "BlenderProjects",
        component: BlenderProjects
    }, {
        title: "FCCProjects",
        url: "FCCProjects",
        component: FCCProjects
    }, {
        title: "ThisWebsite",
        url: "ThisWebsite",
        component: ThisWebsite
    }, {
        title: "Not Found",
        url: ":NotFound",
        component: NotFound
    }
];
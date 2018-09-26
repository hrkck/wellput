import BlenderProjects from '../../Pages/Projects/BlenderProjects/BlenderProjects';
import FCCProjects from '../../Pages/Projects/FCCProjects/FCCProjects';
import ThisWebsite from '../../Pages/Projects/ThisWebsite/ThisWebsite';

import {NotFound} from '../../../Components/NotFound/Page404';

export const projectsDropDown = [
    {
        title: "Blender Projects",
        url: "BlenderProjects",
        component: BlenderProjects
    }, {
        title: "FCC Projects",
        url: "FCCProjects",
        component: FCCProjects
    }, {
        title: "This Website",
        url: "ThisWebsite",
        component: ThisWebsite
    }, {
        title: "Not Found",
        url: ":NotFound",
        component: NotFound
    }
];
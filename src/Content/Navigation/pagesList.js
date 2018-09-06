import Home from '../Pages/Home/Home';
import About from '../Pages/About/About';
import FCCProjects from "../Pages/FCCProjects/FCCProjects";
import BlenderProjects from "../Pages/BlenderProjects/BlenderProjects";
import {NotFound} from '../../Components/core/NotFound/Page404';

export const pagesList = [
    {
        title: "Home",
        exact: true,
        url: "",
        component: Home
    }, {
        title: "About",
        url: "about",
        component: About
    }, {
        title: "FCC Projects",
        url: "FCCProjects",
        component: FCCProjects
    }, {
        title: "Blender Projects",
        url: "BlenderProjects",
        component: BlenderProjects
    }, {
        title: "Not Found",
        url: ":NotFound",
        component: NotFound
    }
];
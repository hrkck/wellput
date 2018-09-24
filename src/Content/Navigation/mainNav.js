import Home from '../Pages/Home/Home';
import Projects from "../Pages/Projects/Projects";
import {NotFound} from '../../Components/NotFound/Page404';

import {projectsDropDown} from './Projects/projectsDropDown';


export const mainNav = [
    {
        title: "Home",
        exact: true,
        url: "",
        component: Home
    }, {
        title: "Projects",
        url: "projects",
        dropDown: projectsDropDown,
        component: Projects
    }, {
        title: "Not Found",
        url: ":NotFound",
        component: NotFound
    }
];
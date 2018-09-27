import Home from '../Pages/Home/Home';
import Projects from "../Pages/Projects/Projects";
import BSc from "../Pages/BSc/BSc";
import {NotFound} from '../../Components/NotFound/Page404';

import {projectsDropDown} from './Projects/projectsDropDown';
import {BScDropDown} from './BSc/BScDropDown';


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
        title: "BSc",
        url: "BSc",
        dropDown: BScDropDown,
        component: BSc
    }, {
        title: "Not Found",
        url: ":NotFound",
        component: NotFound
    }
];
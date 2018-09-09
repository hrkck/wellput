import Home from '../../Pages/Home/Home';
import About from '../../Pages/About/About';
import Projects from "../../Pages/Projects/Projects";
import TidyUp from "../../Pages/TidyUp/TidyUp";
import {NotFound} from '../../../Components/NotFound/Page404';

import {projectsDropDown} from '../Projects/projectsDropDown';
import {tidyUpDropDown} from "../TidyUp/tidyUpDropDown";


export const mainPages = [
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
        title: "Projects",
        url: "projects",
        dropDown: projectsDropDown,
        component: Projects
    }, {
        title: "Tidy Up",
        url: "TidyUp",
        dropDown: tidyUpDropDown,
        component: TidyUp
    }, {
        title: "Not Found",
        url: ":NotFound",
        component: NotFound
    }
];
import Home from '../../Pages/Home/Home';
import About from '../../Pages/About/About';
import FCCProjects from "../../Pages/FCCProjects/FCCProjects";
import BlenderProjects from "../../Pages/BlenderProjects/BlenderProjects";
import TidyUp from "../../Pages/TidyUp/TidyUp";
import {tidyUpDropDown} from "../TidyUp/tidyUpDropDown";
import {NotFound} from '../../../Components/NotFound/Page404';

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
        title: "FCC Projects",
        url: "FCCProjects",
        component: FCCProjects
    }, {
        title: "Blender Projects",
        url: "BlenderProjects",
        component: BlenderProjects
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
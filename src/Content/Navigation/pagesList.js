import Home from '../Pages/Home/Home';
import About from '../Pages/About/About';
import FCCProjects from "../Pages/FCCProjects/FCCProjects";
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
        title: "FCCProjects",
        url: "FCCProjects",
        component: FCCProjects
    }, {
        title: "Not Found",
        url: ":NotFound",
        component: NotFound
    }
];
import Home from '../MainPages/Home';
import About from '../MainPages/About';
import Topics from "../MainPages/Topics";
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
        title: "Topics",
        url: "topics",
        component: Topics
    },
    {
        title: "Not Found",
        url: ":NotFound",
        component: NotFound
    }
];
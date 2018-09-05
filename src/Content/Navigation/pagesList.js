import Home from '../Pages/Home/Home';
import About from '../Pages/About/About';
import Topics from "../Pages/Topics/Topics";
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
import Home from '../MainPages/Home';
import About from '../MainPages/About';
import Topics from "../MainPages/Topics";

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
    }
];
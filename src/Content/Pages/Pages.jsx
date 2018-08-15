// import React from 'react';
import Home from './Home';
import About from './About';
import Topics from "./Topics";
import { NotFound } from '../../Components/core/NotFound/Page404';

export const pages = [
    {
        title: "Home",
        exact: true,
        url: "",
        component: Home
    },
    {
        title: "About",
        url: "about",
        component: About
    },
    {
        title: "Topics",
        url: "topics",
        component: Topics
    }
];
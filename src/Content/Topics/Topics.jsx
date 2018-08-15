import React from 'react';

const comp1 = () => <h1>comp1</h1>;
const comp2 = () => <h1>comp2</h1>;
const comp3= () => <h1>comp3</h1>;

export const topicsList = [
    {
        title: "Post 1",
        url: "post-1",
        component: comp1
    }, {
        title: "Post 2",
        url: "post-2",
        component: comp2
    }, {
        title: "Post 3",
        url: "post-3",
        component: comp3
    }
];



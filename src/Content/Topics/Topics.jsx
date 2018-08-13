import React from 'react';

export const topicsList = [
    {
        title: "Post 1",
        url: "post-1",
        component: ({match}) =>(<h1>{match.url}</h1>)
    }, {
        title: "Post 2",
        url: "post-2",
        component: ({match}) =>(<h1>{match.url}</h1>)
    }, {
        title: "Post 3",
        url: "post-3",
        component: ({match}) =>(<h1>{match.url}</h1>)
    }
];
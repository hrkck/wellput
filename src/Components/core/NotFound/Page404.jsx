import React from 'react';

export const NotFound = ({match}) => (
    <div>
        <h2>Sorry, {match.url}
            not found! ERROR 404</h2>
    </div>
);
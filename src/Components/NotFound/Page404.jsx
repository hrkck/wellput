import React from 'react';

import Page from '../Page/Page';

export const NotFound = ({match}) => (
    <Page>
        <h2>Sorry, {match.url} not found! ERROR 404</h2>
    </Page>
);
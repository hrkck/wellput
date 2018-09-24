import React from 'react';

import Page from '../../../Components/Page/Page';

const Home = () => (
    <Page>
        <h2>Home</h2>
        <strike>
            <p>Final test and accepted work-flow:
                <ol>
                    <li>Make changes in <code>source</code> branch</li>
                    <li><code>npm run deploy</code> to build the site on <code>gh-pages</code> branch.</li>
                    <li>Merge <code>gh-pages</code> onto <code>master</code>. Push <code>master</code> branch.</li>
                </ol>
            </p>
        </strike>
        <div className="col py-2 ml-3">
            <iframe
                className="float-right border-radius-3"
                title="banging_dog"
                src="https://coub.com/embed/15oj4j?muted=false&autostart=false&originalSize=false&startWithHD=false"
                allowFullScreen
                frameBorder="0"
                width="320px"
                height="400px"></iframe>
            <script async src="//c-cdn.coub.com/embed-runner.js"></script>
        </div>
    </Page>
);

export default Home;
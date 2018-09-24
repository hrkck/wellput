import React from 'react';

import Page from '../../../Components/Page/Page';

const Home = () => (
    <Page>
        <h2>Home</h2>
        <p>Final test and accepted work-flow:
            <ol>
                <li>Make changes in <pre>source</pre> branch</li>
                <li><pre>npm run deploy</pre> to build the site on <pre>gh-pages</pre> branch.</li>
                <li>Merge <pre>gh-pages</pre> onto <pre>master</pre>. Push <pre>master</pre> branch.</li>
            </ol>
        </p>
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
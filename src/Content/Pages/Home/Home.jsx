import React from 'react';

import Page from '../../../Components/Page/Page';

const Home = () => (
    <Page>
        <h2>Home</h2>
        
        <p>Problem solved by:</p>
        <a href="https://github.com/tschaub/gh-pages#when-get-error-branch-already-exists"target="_blank" rel="noopener noreferrer">gh-pages "branch already exist" error.</a>
        <p>travis ci update</p>
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
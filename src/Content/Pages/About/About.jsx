import React from 'react';

import Page from '../../../Components/Page/Page';


const About = () => {
    return (
        <Page>
            <h3>About me...</h3>
            <p>For an insight, check my cv.</p>
            <a href={require("./CV/assets/cv-hakkirizakucuk-english.pdf")} target="_blank">CV</a>
            <p>I work on this website to put the weight off of mind.</p>
            
        </Page>
    )
};

export default About;
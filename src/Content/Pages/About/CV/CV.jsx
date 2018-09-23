import React from 'react';
import './assets/CV.css';

export const englishCV = () => {
    return (<a target="_blank"
        className="embed-responsive"
        title="english-cv"
        href={require("./assets/cv-hakkirizakucuk-english.pdf")}>English CV</a>)
}

export const germanCV = () => {
    return (<iframe
        className="embed-responsive"
        title="deutsch-cv"
        src={require("./assets/cv-hakkirizakucuk-deutsch.pdf")}/>)
}
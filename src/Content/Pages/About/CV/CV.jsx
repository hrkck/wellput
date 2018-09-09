import React from 'react';
import './assets/CV.css';

export const englishCV = () => {
    return (<iframe
        className="embed-responsive"
        title="english-cv"
        src={require("./assets/cv-hakkirizakucuk-english.pdf")}/>)
}

export const germanCV = () => {
    return (<iframe
        className="embed-responsive"
        title="deutsch-cv"
        src={require("./assets/cv-hakkirizakucuk-deutsch.pdf")}/>)
}
import React from 'react';

export const englishCV = () => {
    return (
        <div>
            <object style={cv} data={require("./assets/cv-hakkirizakucuk-english.pdf")}>
                <iframe
                    title="deutch-cv"
                    src={require("./assets/cv-hakkirizakucuk-english.pdf")}/>
            </object>
        </div>
    )
}

export const germanCV = () => {
    return (
        <div>
            <object style={cv} data={require("./assets/cv-hakkirizakucuk-deutsch.pdf")}>
                <iframe
                    title="deutch-cv"
                    src={require("./assets/cv-hakkirizakucuk-deutsch.pdf")}/>
            </object>
        </div>
    )
}

const cv = {
    width: "720px",
    height: "960px",
    "font-size": "200%"
}
import React from 'react';

const CodePenEmbed = ({title, src}) => 
    <div>
        <iframe 
            className="minHeight-75 w-100"
            title={title}
            src={`${src}result&embed-version=2`}
            frameborder="no"
            allowtransparency='true'
            allowFullScreen={true}
        />
        See the pen <a href={`https:${src}`} target="_blank" rel="noopener noreferrer"> FCC_Portfolio </a> by <a href='https://codepen.io/hrkucuk' target="_blank" rel="noopener noreferrer">@hrkucuk</a> on <a href='https://codepen.io' target="_blank" rel="noopener noreferrer"> CodePen</a>.
    </div>

export const Portfolio = () => {
    return (
        <CodePenEmbed title="FCC_Portfolio" src="//codepen.io/hrkucuk/embed/LBjpZx/"/>
    );
};

export const TechnicalDocumentationPage = () => {
    return (
        <CodePenEmbed title="FCC_TechnicalDocumentationPage" src="//codepen.io/hrkucuk/embed/RBVzay/"/>
    );
};

export const ProductLandingPage = () => {
    return (
        <CodePenEmbed title="FCC_ProductLandingPage" src="//codepen.io/hrkucuk/embed/ZjKPrB/"/>
    );
};

export const SurveyForm = () => {
    return (
        <CodePenEmbed title="FCC_SurveyForm" src="//codepen.io/hrkucuk/embed/qymNXo/"/>
    );
};

export const TributePage = () => {
    return (
        <CodePenEmbed title="FCC_TributePage" src="//codepen.io/hrkucuk/embed/QBvwqq/"/>
    );
};

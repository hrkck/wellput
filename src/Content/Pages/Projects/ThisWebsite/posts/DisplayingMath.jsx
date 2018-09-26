import React from "react";
import MathJax from 'react-mathjax2'


const block = 'U = 1/(R_(si) + sum_(i=1)^n(s_n/lambda_n) + R_(se)) * (prod_(x=1)^100 x + 4) / oo'
const inline = "x in RR"


export const DisplayingMath = () => 
    <div>
        <h2>Displaying Math</h2>

        <p>I am using <a href="http://asciimath.org" target="_blank" rel="noopener noreferrer">AsciiMath</a> syntax and <a href="https://www.mathjax.org/" target="_blank" rel="noopener noreferrer">MathJax</a> JS library to display mathematical formulas in this website. There is <a href="https://www.npmjs.com/package/react-mathjax2" target="_blank" rel="noopener noreferrer">a nice NPM module</a> to use MathJax library with ReactJS</p>

        <p>This is a block formula written in AsciiMath:</p>
        <MathJax.Context>
            <div className="math-block">
                <MathJax.Node>{block}</MathJax.Node>
            </div>
        </MathJax.Context>

        You can right click on these formulas to customize the way they look or learn more information about them. That is thanks to MathJax.

        <p>And here is how it looks like in AsciiMath syntax:</p>
        <pre>{block}</pre>
                
        <MathJax.Context>
            <div>
            <p>Another way to display math expressions is to place them inline: <MathJax.Node inline>{inline}</MathJax.Node></p>
            </div>
        </MathJax.Context>


        <p>Now I say, this is <span className="brand text-info">Well Put.</span></p>

    </div>
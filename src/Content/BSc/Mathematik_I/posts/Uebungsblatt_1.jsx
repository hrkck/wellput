import React from "react";
import MathJax from "react-mathjax2";

const Uebungsblatt_1 = () => {
    return (
        <div>
            <h1>Übungsblatt 1</h1>

            <p>
                In den ersten Übungsblatt gibt es 11 Aufgaben über verschiedene Begriffen. Hier
                gibt es nur die Rechenregeln für die Begriffen. Das ist wie ein "cheat sheet".
            </p>

            <p>Alle die Begriffen, die in der Übungsblatt waren:</p>
            <p>Brüche, Potenzen, Wurzeln, Logarithmen, Absolutbeträge, Polynomdivion, Lösen
                von Gleichungen: einige Grundprinzipien, Ausklammern der grössten Potenz,
                Gleichungen, Quadratische Gleichung mit Parameter, Fakultäten und
                Binomialkoeffizienten, Summen und Produkte, Summenzeichen, anwendung, grobe
                Schätzung des Logarithmus
                <br/><hr/>
                (Kesirler, kuvvetler, kökler, logaritmalar, mutlak değerler, polinom bölünme,
                denklemlerin çözümü: bazı temel prensipler, en büyük çarpan parantezine alma,
                denklemler, parametrelerle ikinci dereceden denklemler, faktöriyel ve binom katsayıları,
                toplam ve çarpım sembolleri,logaritmanın kaba tahmini)</p>

            <h3>Regeln für Rechnungen</h3>
            
            <p>Potenz Rechenregeln:</p>
            <MathJax.Context>
                <div className="math-block">
                    <MathJax.Node>
                        a^r * a^s = a^(r+s) 
                    </MathJax.Node>
                    <hr/>
                    <MathJax.Node>
                        a^r / a^s = a^r-s 
                    </MathJax.Node>
                    <hr/>
                    <MathJax.Node>
                        a^r * b^r = (a * b)^r
                    </MathJax.Node>
                    <hr/>
                    <MathJax.Node>
                        a^r / b^r = (a / b)^r 
                    </MathJax.Node>
                    <hr/>
                    <MathJax.Node>
                        (a^r)^s = a^(r*s)
                    </MathJax.Node>
                </div>
            </MathJax.Context>

            <p>Wurzeln Rechenregeln:</p>
            <MathJax.Context>
                <div className="math-block">
                    <MathJax.Node>
                        sqrt a = root(2)(a)
                    </MathJax.Node>
                    <hr/>
                    <MathJax.Node>
                        p * root(r)(a^s) + q * root(r)(a^s) = (p + q) * root(r)(a^s)
                    </MathJax.Node>
                    <hr/>
                    <MathJax.Node>
                        root(r)(a) * root(s)(a) = root(r * s)(a^(r+s))
                    </MathJax.Node>
                    <hr/>
                    <MathJax.Node>
                        root(r)(a)/root(s)(a) = root(r*s)(a^(s-r))
                    </MathJax.Node>
                    <hr/>
                    <MathJax.Node>
                        root(r)(a) / root(s)(a) = root(r)(a) * root(r)(b)
                    </MathJax.Node>
                    <hr/>
                    <MathJax.Node>
                        root(r)(a/b) = root(r)(a) / root(r)(b)
                    </MathJax.Node>
                    <hr/>
                    <MathJax.Node>
                        root(r)(root(s)(a)) = root(r*s)(a) = root(s)(root(r)(a))
                    </MathJax.Node>
                    <hr/>
                    <MathJax.Node>
                        root(n*r)(a^(n*s)) = root(r)(a^s)
                    </MathJax.Node>
                </div>
            </MathJax.Context>

            <strong>
                <p>Eine Bemerkung zum Logarithmus:</p>
            </strong>
            <MathJax.Context>
                <div>
                    <p>
                        Überlegung am Beispiel &nbsp;
                        <MathJax.Node inline>2^3 = 8</MathJax.Node>
                    </p>
                    <p>
                        <MathJax.Node inline>2^3 = x</MathJax.Node>
                        &nbsp; ... Potenzieren
                    </p>
                    <p>
                        <MathJax.Node inline>x^3 = 8</MathJax.Node>
                        &nbsp; ... Wurzelnziehen
                    </p>
                    <p>
                        <MathJax.Node inline>2^x = 8</MathJax.Node>
                        &nbsp; ... ?
                    </p>
                    <p>
                        wir brauchen jetzt eine weitere Umkehroperation des Potenzierens, mit
                        zugehöriger Schreibweise.
                    </p>
                </div>
            </MathJax.Context>

            <p>Logarithmus Rechenregeln:</p>
            <MathJax.Context>
                <div className="math-block">
                    <MathJax.Node>log_a (u * v) = log_a u + log_a v</MathJax.Node>
                    <hr/>
                    <MathJax.Node>log_a (u / v) = log_a u - log_a v</MathJax.Node>
                    <hr/>
                    <MathJax.Node>log_a u^r = r * log_a u</MathJax.Node>
                    <hr/>
                    <MathJax.Node>log_b u = log_a u / log_a b</MathJax.Node>
                    <hr/>
                    <MathJax.Node>log_10, lg</MathJax.Node>
                    <hr/>
                    <MathJax.Node>log_e, ln</MathJax.Node>
                    <hr/>
                    <p>Zwei Formeln unter sind eigentlich gleich, sie haben aber nur ein andere Perspektive</p>
                    <MathJax.Node>a^(log_a x) = x</MathJax.Node>
                    <hr/>
                    <MathJax.Node>a^x = e^(x * ln a)</MathJax.Node>
                </div>
            </MathJax.Context>

            <p>Formeln für Gleichung einer Gerade:</p>
            <MathJax.Context>
                <div className="math-block">
                    <MathJax.Node>P_1 = (x_1, y_1) , P_2 = (x_2, y_2)</MathJax.Node>
                    <hr/>
                    <MathJax.Node>f(y) = mx + t</MathJax.Node>
                    <hr/>
                    <MathJax.Node>m = (y_2 - y_1)/(x_2 - x_1)</MathJax.Node>
                </div>
            </MathJax.Context>

            <p>Formeln um Quadratische Gleichungen zu lösen:</p>
            <MathJax.Context>
                <div className="math-block">
                    <MathJax.Node>f(y) = ax^2 + bx + c</MathJax.Node>
                    <hr/>
                    <MathJax.Node>/_\ = b^2 - 4ac</MathJax.Node>
                    <hr/>
                    <MathJax.Node>x_(1,2) = (-b +- sqrt /_\) / (2a)</MathJax.Node>
                    <hr/>
                    <MathJax.Node>x_1 + x_2 = - b/a</MathJax.Node>
                    <hr/>
                    <MathJax.Node>x_1 * x_2 = c/a</MathJax.Node>
                    <hr/>
                    <MathJax.Node>|x_1 - x_2| = (sqrt /_\) / (|a|)</MathJax.Node>
                    <hr/>
                    <MathJax.Node>1/x_1 + 1/x_2 = - b/c</MathJax.Node>
                    <hr/>
                    <MathJax.Node>x_1^2 + x_2^2 = (b^2 - 2ac) / a^2</MathJax.Node>
                    <hr/>
                </div>
            </MathJax.Context>

            <p>Binomialkoeffizenten</p>
            <MathJax.Context>
                <div className="math-block">
                    <MathJax.Node>((n),(k)) = (n!) / (k! * (n - k)!)</MathJax.Node>
                    <hr/>
                </div>
            </MathJax.Context>
        </div>
    );
};

export default Uebungsblatt_1;

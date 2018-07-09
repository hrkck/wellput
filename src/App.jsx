import React, { Component } from "react";
import TopNavBar from "./Components/core/TopNavBar/TopNavBar";
import Wrapper from './Components/test/Wrapper/Wrapper';

import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "./App.css";

class App extends Component {
    render() {
        return (
            <div>
                <TopNavBar logo={logo} title="Welcome to the reactive clones" />
                <br/>
                <div className="container text-center">
                    <Wrapper></Wrapper>
                </div>
            </div>
        );
    }
}

export default App;

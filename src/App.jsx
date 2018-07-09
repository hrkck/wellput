import React, { Component } from "react";
import TopNavBar from "./Components/core/TopNavBar/TopNavBar";
import Mounter from './Components/test/Mounter/Mounter';
import Counter from './Components/test/Counter/Counter';


import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "./App.css";

class App extends Component {
    render() {
        return (
            <div>
                <TopNavBar logo={logo} title="Welcome to the reactive clones" /> <br/>
                <Mounter mountaineer={<Counter/>}></Mounter>
            </div>
        );
    }
}

export default App;

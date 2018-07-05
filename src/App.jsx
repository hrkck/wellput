import React, { Component } from "react";
import TopNavBar from "./Components/core/TopNavBar/TopNavBar";
import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "./App.css";

class App extends Component {
    render() {
        return (
            <div>
                <TopNavBar logo={logo} title="Welcome to the reactive clones" />

                <p className="App-intro">
                    To get started, edit <code>src/App.jsx</code> and save to reload.
                </p>
                <p>Some changes made.</p>
                <div className="btn btn-danger">Danger!</div>
                <div className="container col-sm-2">
                    <div className="alert alert-primary">
                        This is a primary alert — check it out!
                    </div>
                </div>
                <p>Bootstrap added. works fine.</p>
            </div>
        );
    }
}

export default App;

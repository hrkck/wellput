import React, { Component } from "react";
import TopNavBar from "./Components/core/TopNavBar/TopNavBar";
import Mounter from './Components/core/Mounter/Mounter';
import MounterLink from './Components/core/Mounter/MounterLink';
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
                <Mounter mountaineer={<Counter/>} mountaineerID="Counter"></Mounter>
                <MounterLink mountaineer={<Counter/>} mountaineerID="CounterLink" mountaineerLinkID="CounterLinkID" mountaineerText="Mount Counter"/>
                <MounterLink mountaineer={<Counter/>} mountaineerID="CounterLink2" mountaineerLinkID="CounterLinkID2" mountaineerText="Mount Counter2"/>
            </div>
        );
    }
}

export default App;

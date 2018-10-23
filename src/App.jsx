import React, {Component} from "react";

import {nav} from './Content/nav';
import {Navigation} from './Components/Navigation/Nav';
import {Routes} from './Components/Routes/Routes';

export default class App extends Component {
    render() {
        return (
            <div className="">
                <Navigation navList={nav.main}/>
                <hr/>
                <Routes pagesList={nav.main}/>
                
            </div>
        );
    }
}

/*
    Consider above how I pass extra `props` to the `SubNav` component (stateless),
    whilst sacrificing some built-in `props` such as `match`, provided by `React-Router`.
    I did some lookup about that issue, found some answer but did not quite work for me.
    It MIGHT be because I am using stateless component (`SubNav`).
    Needs more experimenting.
*/

/**
 * The above comment section is NO MORE RELEVANT.
 * The mentioned problem is probably solved. For a matter of fact, I don't even remember what was it.
 * But the desired navigation system works fine.
 *
 */
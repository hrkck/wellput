import React, {Component} from "react";

import {pagesList} from './Content/Navigation/pagesList';
import {Nav} from './Components/core/Nav/Nav';

export default class App extends Component {
    render() {
        return (
            <div>
                <Nav navList={pagesList}/>
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
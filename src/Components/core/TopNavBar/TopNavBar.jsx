import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TopNavBar extends Component {
    // constructor(props) {
    //     super(props);
    // }
    
    render() {
        return (
            <div className="text-center">
                <header className="App-header">
                    <img src={this.props.logo} className="col-sm-1 spin" alt="logo" />
                    <h1 className="App-title">{this.props.title}</h1>
                </header>
            </div>
        );
    }
}

TopNavBar.propTypes = {
    logo: PropTypes.element,
    title: PropTypes.string
};

export default TopNavBar;
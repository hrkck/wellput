import React, { Component } from "react";
import PropTypes from "prop-types";
import SideNav  from "./SideNav"

class TopNavBar extends Component {
    render() {
        return (
            <div className="text-center">
                <nav class="navbar navbar-dark bg-dark">
                    <div className="row align-items-center col-6">
                        <svg className="col-sm-3 spin">{this.props.logo}</svg>
                        <div className="col-sm-6 text-secondary">
                            <h1>{this.props.title}</h1>
                        </div>
                    </div>
                    <SideNav/>
                </nav>
            </div>
        );
    }
}

TopNavBar.propTypes = {
    logo: PropTypes.element,
    title: PropTypes.string
};

export default TopNavBar;

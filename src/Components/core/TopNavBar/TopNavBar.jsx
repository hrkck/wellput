import React, { Component } from "react";
import PropTypes from "prop-types";

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
                    <div className="row col-6 text-white">
                        <div className="col-sm-2">Page 1</div>
                        <div className="col-sm-2">Page 2</div>
                        <div className="col-sm-2">Page 3</div>
                    </div>
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

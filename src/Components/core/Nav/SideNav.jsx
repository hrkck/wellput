import React, { Component } from 'react';
// import PropTypes from 'prop-types';

class SideNav extends Component {
    render() {
        return (
            <ul className="nav nav-tabs justify-content-center col-6 container">
                <li className="nav-item">
                    <button className="nav-link active btn">Somthing</button>
                </li>
                <li className="nav-item">
                    <button className="nav-link btn">Somthing</button>
                </li>
                <li className="nav-item">
                    <button className="nav-link btn">Somthing</button>
                </li>
                <li className="nav-item">
                    <button className="nav-link btn">Somthing</button>
                </li>
                <li className="nav-item dropdown">
                    <button className="nav-link dropdown-toggle btn" data-toggle="dropdown" aria-expanded="false">dropdown</button>
                    <div className="dropdown-menu">
                        <button className="dropdown-item btn">someting</button>
                        <button className="dropdown-item btn">someting</button>
                        <button className="dropdown-item btn">someting</button>
                    </div>
                </li>
            </ul>
        );
    }
}

// SideNav.propTypes = {

// };

export default SideNav;
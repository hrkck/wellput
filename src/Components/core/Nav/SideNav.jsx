import React, { Component } from 'react';

class SideNav extends Component {
    render() {
        return (
            <ul className="nav nav-pills justify-content-around col-4 container">
                <NavLink />
                <NavLink />
                <NavLink />
                <NavLink />
                <li className="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="" role="button" aria-haspopup="true" aria-expanded="false">More</a>
                    <div className="dropdown-menu">
                        <DropDownLink />
                        <DropDownLink />
                        <DropDownLink />
                        <div class="dropdown-divider"></div>
                        <DropDownLink />
                    </div>
                </li>
            </ul>
        );
    }
}

const NavLink = (props) => {
    return <li className="nav-item"><a className={props.isActive} href={props.link} onClick={props.clickAction}>{props.content}</a></li>
}

const DropDownLink = (props) => {
    return <a className={props.isActive} href={props.link} onClick={props.clickAction}>{props.content}</a>
}

NavLink.defaultProps = {
    link: "",
    clickAction: (e) => e.preventDefault(),
    isActive: "nav-link",
    content: "Text"
}

DropDownLink.defaultProps = {
    link: "",
    clickAction: (e) => e.preventDefault(),
    isActive: "dropdown-item",
    content: "Text"
}


export default SideNav;
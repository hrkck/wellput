import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

class Mounter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: ""
        };

        this.props = {
            mountaineer: null,
            mountaineerID: null
        };

        this.mount.bind(this);
        this.unMount.bind(this);
    }

    mount = () => {
        ReactDOM.render(this.props.mountaineer, document.getElementById(this.props.mountaineerID));
    }

    unMount = () => {
        ReactDOM.unmountComponentAtNode(document.getElementById(this.props.mountaineerID));
    }

    render() {
        return (
            <div className="container text-center">
                <input className="btn btn-info" type="button" value="Mount" onClick={this.mount}/>
                <input className="btn btn-danger" type="button" value="Unmount" onClick={this.unMount}/>
                <div id={this.props.mountaineerID}>
                    {/* Here goes the counter component when mounted */}
                </div>
            </div>
        );
    }
}

Mounter.protoTypes = {
    mountaineer: PropTypes.object.isRequired,
    mountaineerID: PropTypes.string.isRequired
}

export default Mounter;
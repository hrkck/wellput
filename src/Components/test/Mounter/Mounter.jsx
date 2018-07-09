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
            mountaineer: () => {return(<div><p>something</p></div>);}
        };

        this.mount.bind(this);
        this.unMount.bind(this);
    }

    mount = () => {
        ReactDOM.render(this.props.mountaineer, document.getElementById("counterComponent"));
    }

    unMount = () => {
        ReactDOM.unmountComponentAtNode(document.getElementById("counterComponent"));
    }

    render() {
        return (
            <div className="container text-center">
                <input className="btn btn-info" type="button" value="Mount" onClick={this.mount}/>
                <input className="btn btn-danger" type="button" value="Unmount" onClick={this.unMount}/>
                <div id="counterComponent">
                    {/* Here goes the counter component when mounted */}
                </div>
            </div>
        );
    }
}

Mounter.protoTypes = {
    mountaineer: PropTypes.object
}

export default Mounter;
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

class MounterLink extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: "",
            mounted: false
        };

        this.props = {
            mountaineer: null,
            mountaineerID: null
        };

        this.toggleMount.bind(this);
    }

    toggleMount = () => {
        if(this.state.mounted){
            ReactDOM.unmountComponentAtNode(document.getElementById(this.props.mountaineerID));
            this.setState({mounted: !this.state.mounted})
        }else{
            ReactDOM.render(this.props.mountaineer, document.getElementById(this.props.mountaineerID));
            this.setState({mounted: !this.state.mounted})
        }
    }

    render() {
        return (
            <div className="container text-center">
                <a id={this.props.mountaineerLinkID} onClick={this.toggleMount}>{this.props.mountaineerText}</a>
                <div id={this.props.mountaineerID}>
                    {/* Here goes the counter component when mounted */}
                </div>
            </div>
        );
    }
}

MounterLink.protoTypes = {
    mountaineer: PropTypes.object.isRequired,
    mountaineerID: PropTypes.string.isRequired,
    mountaineerLinkID: PropTypes.string.isRequired,
    mountaineerText: PropTypes.string.isRequired
}

export default MounterLink;
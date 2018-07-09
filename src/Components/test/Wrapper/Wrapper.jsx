import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import Counter from '../Counter/Counter';

class Wrapper extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: ""
        }

        this.mount.bind(this);
        this.unMount.bind(this);
    }

    mount = () => {
        ReactDOM.render(<Counter/>, document.getElementById("counterComponent"));
    }

    unMount = () => {
        ReactDOM.unmountComponentAtNode(document.getElementById("counterComponent"));
    }

    render() {
        return (
            <div>
                <input className="btn btn-info" type="button" value="Mount" onClick={this.mount}/>
                <input className="btn btn-danger" type="button" value="Unmount" onClick={this.unMount}/>
                <div id="counterComponent">
                    {/* Here goes the counter component when mounted */}
                </div>
            </div>
        );
    }
}

export default Wrapper;
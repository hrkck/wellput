import React, { Component } from 'react';

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            number: 0,
            blink: "alert alert-info"
        }
        this.increase.bind(this);
        this.decrease = this.decrease.bind(this);
        this.blinkNormal.bind(this);
        this.blinkRed.bind(this);
    }

    increase = () => {
        this.setState({ number: this.state.number + 1 });
    }

    decrease() {
        this.setState({ number: this.state.number - 1 })
    }

    blinkRed = () => {
        this.setState({ blink: "alert alert-danger" });
    }

    blinkNormal = () => {
        this.setState({ blink: "alert alert-info" });
    }

    render() {
        return (
            <div>
                <p className={this.state.blink} >
                    {this.state.number}
                </p>
                <input type="button" value="+" onClick={this.increase} onMouseDown={this.blinkRed} onMouseUp={this.blinkNormal} />
                <input type="button" value="-" onClick={this.decrease} onMouseDown={this.blinkRed} onMouseUp={this.blinkNormal} />
            </div>
        );
    }
}

export default Counter;
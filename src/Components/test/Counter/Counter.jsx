import React, { Component } from 'react';

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            number: 0
        }
        this.increase.bind(this);
        this.decrease = this.decrease.bind(this);
    }

    increase = () => {
        this.setState({number: this.state.number + 1});
    }

    decrease(){
        this.setState({number: this.state.number - 1})
    }
    
    render() {
        return (
            <div>
                <p className="alert alert-info" >
                    {this.state.number}
                </p>
                <input type="button" value="+" onClick={this.increase}/>
                <input type="button" value="-" onClick={this.decrease}/>
            </div>
        );
    }
}

export default Counter;
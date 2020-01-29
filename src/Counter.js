import React, { Component } from 'react';

class Counter extends Component {

    constructor(promps) {
        super(promps)
        this.state = {
            count: 0
        }
        this.clickHandler = this.clickHandler.bind(this)
    }

    clickHandler(event) {
        let current = this.state.count + event;
        if (current < 0) {
            current = this.state.count
        } else if (current > 9999) {
            current = current - 10000;
        }
        this.setState({
            count: current
        });
    }

    pad(num, digits) {
        let stringified = num.toString()
        let numZeros = digits - stringified.length
        let str = ''
        for (let i = 0; i < numZeros; i++) {
            str += '0'
        }
        str += stringified
        return str
    }

    render() {
        return (
            <>
                <h2>{this.pad(this.state.count, 4)}</h2>

                Ones:
                    <button onClick={this.clickHandler.bind(this, 1)}> + </button>
                <button onClick={this.clickHandler.bind(this, -1)}> - </button>

                Tens:
                    <button onClick={this.clickHandler.bind(this, 10)}> + </button>
                <button onClick={this.clickHandler.bind(this, -10)}> - </button>

                Hundreds:
                    <button onClick={this.clickHandler.bind(this, 100)}> + </button>
                <button onClick={this.clickHandler.bind(this, -100)}> - </button>

                Thousands:
                    <button onClick={this.clickHandler.bind(this, 1000)}> + </button>
                <button onClick={this.clickHandler.bind(this, -1000)}> - </button>

            </>
        )
    }
}

export default Counter;
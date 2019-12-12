import React, { Component, Fragment } from "react";

import Button from "./Button/index.js"
import { render } from "react-dom"

import "./style.scss"

class App extends Component {

    state = {
        counter: 0
    }

    // componentDidMount() {

    // }

    // shouldComponentUpdate(nextProps, nextState) {
    //     return nextState.counter <= 10;
    // }

    handleClick = () => {
        this.setState({
            counter: this.state.counter + 1
        })
    }
    render() {
        return (
            <Fragment>
                <h1>{this.state.counter}</h1>
                <Button onClick={this.handleClick}>Contar</Button>
            </Fragment>
        );
    }
}

render(<App />, document.getElementById("app"))

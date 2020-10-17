import React from 'react'
const { Component } = React

// import React, { Component } from 'react'

export default class App extends Component {
    constructor(props) {
        super(props)

        this.state = {
            counter: 0
        }
    }

    render() {
        return(
            <div>
                <span>{this.state.counter}</span>
                <button>+</button>
                <button>-</button>
            </div>
        )
    }
}

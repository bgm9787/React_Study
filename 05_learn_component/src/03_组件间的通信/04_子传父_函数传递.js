import React from 'react'

class ChildCmp extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <>
                <button onClick={this.props.increment}>+</button>
            </>
        )
    }
}

export default class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            counter: 0
        }
    }

    render() {
        return (
            <>
                <p>当前计数：{this.state.counter}</p>
                <ChildCmp increment= {this.increment.bind(this)}/>
            </>
        )
    }
    increment() {
        this.setState({
            counter: this.state.counter+1
        })
    }
}

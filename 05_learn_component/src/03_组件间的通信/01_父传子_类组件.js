import React from 'react'

class ChildCmp extends React.Component {
    constructor() {
        super()
    }

    componentDidMount() {
        console.log('child componentDidMount',this.props.count)
    }
    render() {
        return (
            <div>父组件传来的数据：{this.props.count}</div>
        )
    }
}

export default class App extends React.Component {
    constructor() {
        super()
        this.state = {
            counter: 0
        }
    }

    componentDidMount() {
        console.log('App componentDidMount')
    }

    componentDidUpdate() {
        console.log('App componentDidUpdate',this.state.counter)
    }

    render() {
        return (
            <>
                <div>App组件</div>
                <ChildCmp count={this.state.counter}></ChildCmp>
                <button onClick={e => this.increment()}>+</button>
                <button onClick={e => this.decrement()}>-</button>
            </>
        )
    }

    increment() {
        console.log(this.state.counter)
        let a = this.state.counter
        this.setState({
            counter: a+1
        })
    }
    
    decrement() {
        this.setState({
            counter: this.state.counter - 1
        })
    }
}
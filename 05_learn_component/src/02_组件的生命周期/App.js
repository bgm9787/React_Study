import React from 'react'

class ChildCmp extends React.Component {
    
    render() {
        return (
            <h2>ChildCmp</h2>
        )
    }

    componentWillUnmount() {
        console.log( 'componentWillUnmount')
    }
}

export default class App extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            count: 0,
            isShow: false
        }
        console.log(this.state.count, 'constructor')
    }
    render() {
        console.log(this.state.count, 'render')

        return (
            <div>
                {this.state.isShow && <ChildCmp />}
                <button onClick = {e => this.changeShow()}>change state</button>
                <h2>当前计数： {this.state.count}</h2>
            </div>
        )
    }

    changeShow() {
        this.setState({
            isShow: !this.state.isShow
        })
    }

    // componentDidMount
    componentDidMount() {
        this.setState({
            count: 2
        }, () => {
            console.log(this.state.count, 'componentDidMount')
        })
    }

    // componentWillUpdate
    componentWillUpdate() {
        console.log(this.state.count, 'componentWillUpdate')
    }
}

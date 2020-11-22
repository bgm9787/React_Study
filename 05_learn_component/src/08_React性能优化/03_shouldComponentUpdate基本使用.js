import React, { Component } from 'react'


export default class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            counter: 0,
            text: '123'
        }
    }
    increment = () => {
        this.setState({counter: this.state.counter+1})
    }

    changeText = () => {
        this.setState({text: '22222'})
    }

    // SCU优化
    shouldComponentUpdate(nextProps, nextState) {
        // return true; // 默认返回true
        // 这个例子中，render函数并不依赖text，但当text发生改变时，也会执行render,(因为jsx中监听到了state的改变)

        if(this.state.counter !== nextState.counter) {
            return true;
        }
        return false;
    }
    // But: shouldComponentUpdate的问题：
    // 1. 当状态很多时，手动处理过于繁琐，不好维护
    // 2. shouldComponentUpdate是个生命周期函数，函数组件中无法使用

    // ===>>>> PureComponent
    // 内部处理：对props和state进行比较，内部判断是否要进行重新渲染

    render() {
        console.log('render')
        return (
            <div>
                <p>{this.state.counter}</p>
                <button onClick={this.increment}>count+1</button>
                <button onClick={this.changeText}>changeText</button>
            </div>
        )
    }


}
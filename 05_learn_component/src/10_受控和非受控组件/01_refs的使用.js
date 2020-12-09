import React, { PureComponent, createRef } from 'react'

class Counter extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            counter: 1
        }

    }
    render() {
        return (
            <div>
                <h2>{this.state.counter}</h2>
                <button onClick={e => this.increment()}>+1</button>

            </div>
        )
    }

    increment() {
        this.setState({
            counter: this.state.counter+1
        })
    }
}


// ref的值根据节点的类型而有所不同：
//      当 ref 属性用于 HTML 元素时，构造函数中使用 React.createRef() 创建的 ref 接收底层 DOM 元素作为其 current 属性；
//      当 ref 属性用于自定义 class 组件时，ref 对象接收组件的挂载实例作为其 current 属性；
//      不能在函数组件上使用 ref 属性，因为他们没有实例；

// 函数式组件是没有实例的，所以无法通过ref获取他们的实例： 
// 但是某些时候，我们可能想要获取函数式组件中的某个DOM元素； 
// 这个时候我们可以通过 React.forwardRef，后面会学习 hooks 中如何使用ref；
export default class App extends PureComponent {
    constructor(props) {
        super(props);

        // 通过createRef函数创建一个ref对象 
        this.titleRef = createRef()
        this.counterRef = createRef()

        this.titleEl = null;
    }
    render() {
        return (
            <div>
                {/* ref=字符串/对象/函数 */}
                <h2 ref="titleRef">Hello React</h2>

                {/* 通过createRef函数创建一个ref对象 */}
                <h2 ref={this.titleRef}>Hello React</h2>

                {/* 函数方式 */}
                <h2 ref={(arg)=> {this.titleEl = arg}}>Hello React</h2>

                <button onClick={e => this.changeText()}>改变文本</button>


                {/* 组件中的ref */}
                <Counter ref={this.counterRef}/>
                <button onClick={e => this.getCounterRef()}>counterRef</button>

            </div>
        )
    }

    changeText() {
        // 1: 字符串（不推荐）
        this.refs.titleRef.innerHTML = "erwer"

        // 2. 对象方式
        console.log('this.titleRef==>', this.titleRef.current)
        this.titleRef.current.innerHTML = "对象方式 Change"

        // 3. 函数方式
        console.log('this.titleEl==>', this.titleEl)
        this.titleEl.innerHTML = "函数方式 Change"

    }

    getCounterRef() {
        console.log('this.getCounterRef==>', this.counterRef.current)
        // this.titleRef.current.innerHTML = "对象方式 Change"
    }
}
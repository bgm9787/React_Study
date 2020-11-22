import React from "react"

function Header() {
    console.log('Header-Component')
    return (
        <h2>Header</h2>
    )
}

class Main extends React.Component {
    render() {
        console.log('Main-Component')
        return (
            <div>
                <MainTitle />
                <MainInfo />
            </div>
        )
    }
}

function MainTitle() {
    console.log('MainTitle-Component')
    return (
        <h4>MainTitle</h4>
    )
}

function MainInfo() {
    console.log('MainInfo-Component')
    return (
        <h4>MainInfo</h4>
    )
}

class Footer extends React.Component {
    render() {
        console.log('Footer-Component')
        return (
            <h3>Footer</h3>
        )
    }
}

// 最外层的counter改变，所有子组件都会被重新渲染一遍！！  非常消耗性能！！
// shouldComponentUpdate
export default class App extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            counter: 0
        }
    }

    increment = () => {
        this.setState({counter: this.state.counter+1})
    }

    render() {
        return (
            <div>
                <p>当前计数：{this.state.counter}</p>
                <button onClick={this.increment}>+1</button>
                <Header />
                <Main />
                <Footer />
            </div>
        )
    }
}
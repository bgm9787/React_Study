import React, {PureComponent} from "react"

function Header() {
    console.log('Header-Component')
    return (
        <h2>Header</h2>
    )
}

class Main extends PureComponent {
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

class Footer extends PureComponent {
    render() {
        console.log('Footer-Component')
        return (
            <h3>Footer</h3>
        )
    }
}

// PureComponent 
// 内部对props和state的新老数据进行比较，内部判断是否要进行重新渲染
export default class App extends PureComponent {
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
        console.log('App Render')
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
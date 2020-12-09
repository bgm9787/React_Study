import React, { PureComponent } from 'react'

// 事件总线： event bus，本质上 是一个全局对象
// 通过这个全局对象发射事件、监听事件

// react 中常用的事件总线库：events库  npm i events

// emitter发射
// EventEmitter 类
import { EventEmitter } from 'events';

// 通过 类EventEmitter 创建一个对象eventBus
const eventBus = new EventEmitter()



class Home extends PureComponent {
    componentDidMount() {
        eventBus.addListener('sayHello', this.addListenSayHello)
    }

    componentWillUnmount() {
        eventBus.removeListener('sayHello', this.addListenSayHello)
    }

    addListenSayHello(name, age) {
        console.log('======', name, age)
    }

    render() {
        return (
            <div>Home</div>
        )
    }
}

class Profile extends PureComponent {
    render() {
        return (
            <div>Profile
                <button onClick={this.eventsHandle}>Event bus</button>
            </div>
        )
    }

    eventsHandle = () => {
        console.log('btn')
        eventBus.emit('sayHello', 'baoguomei', 12)
    }
}



export default class App extends PureComponent {
    render() {
        return (
            <div>
                <Home />
                <Profile />
            </div>
        )
    }
}



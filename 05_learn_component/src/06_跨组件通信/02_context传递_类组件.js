import React from "react"

// 创建Context对象
const UserContext = React.createContext({ // 默认值
    name: 'diyunting',
    age: 24
})

// 需要为类组件！！
class InfoHeader extends React.Component  {
    render() {
        return (
            <h3>{this.context.name + ' ' + this.context.age}</h3>
        )
    }
}

InfoHeader.contextType = UserContext



function Info(props) {
    return (
        <div>
            <InfoHeader/>
            1233213
        </div>
    )
}


export default class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: 'hhhh',
            age: 0
        }
    }

    // Provider 订阅者
    render() {
        return (
            <UserContext.Provider value={this.state}>
                <Info />
            </UserContext.Provider>
        )
    }
}
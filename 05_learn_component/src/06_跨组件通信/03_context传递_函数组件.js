import React from "react"

// 创建Context对象
const UserContext = React.createContext({ // 默认值
    name: 'diyunting',
    age: 24
})

// 函数组件的用法 UserContext.Consumer 消费者  
function InfoHeader(props)  {
    return (
        <UserContext.Consumer>
            {
                value => {
                    return (
                        <h3>{value.name + ' ' + value.age}</h3>
                    )
                }
            }
        </UserContext.Consumer>
    )
}



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
            name: 'baoguomei',
            age: 12
        }
    }

    render() {
        return (
            <UserContext.Provider value={this.state}>
                <Info />
            </UserContext.Provider>
        )
    }
}
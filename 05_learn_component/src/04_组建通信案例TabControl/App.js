import React, {Component} from "react"

import TabControl from "./TabControl"

export default class App extends Component {
    constructor(props) {
        super(props)

        this.state = {
            datas: ['新款', '精选', '流行'],
            curData: '新款'
        }
    }

    render() {
        return (
            <>
                <TabControl {...this.state} clickItem={this.clickItem.bind(this)}/>
                <h3>{this.state.curData}</h3>
            </>
        )
    }
    clickItem(index) {
        console.log(index)
        this.setState({
            curData: this.state.datas[index]
        })
    }
}

import React, { PureComponent, Component } from 'react'

export default class App extends PureComponent {
    constructor(props) {
        super(props)
        this.state={
            datas: [{name: 'bao1', age: 12}, {name: 'bao2', age: 16},{name: 'bao3', age: 18}]
        }
    }

    addItem = () => {
        // 这种做法错误！！
        // 实际上datas的引用（指针）并没有发生改变 === 内存图
        // let newDatas = this.state.datas
        // newDatas.push({name: 'lili', age: 10})
        // this.setState({datas: newDatas})

        let newDatas = [...this.state.datas]  // 进行浅拷贝
        newDatas.push({name: 'lili', age: 10})
        this.setState({datas: newDatas})
    }

    addAge = (index) => {
        console.log(index)
        let newDatas = [...this.state.datas]
        newDatas[index].age += 1
        this.setState({datas: newDatas})
    }

    render() {
        return (
            <div>
                <ul>
                    {this.state.datas.map((item, index) => {
                        return <li key={item.age+index}>
                            <span>name: {item.name}  </span>
                            <span>age: {item.age}</span>
                            <button onClick={() => this.addAge(index)}>age+1</button>
                        </li>
                    })}
                </ul>
                <button onClick={this.addItem}>add item</button>
            </div>
        )
    }
}

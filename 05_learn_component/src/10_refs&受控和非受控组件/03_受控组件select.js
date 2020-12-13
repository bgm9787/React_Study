import React, { PureComponent } from 'react'

// 什么是受控组件：
// 使用js函数来方便的处理表单提交，同时还可以访问用户填写的表单数据

export default class App extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            fruit: 'banana'
        }
    }
    selectChange = (e) => {
        console.log(e.target.value)
        this.setState({fruit: e.target.value})
    }
    
    formSubmit = (e) => {
        e.preventDefault()
        console.log(this.state.fruit)
    }

    render() {
        return (
            <div>
                <form onSubmit={this.formSubmit}>
                    <select onChange={this.selectChange} name="fruit" value={this.state.fruit}>
                        <option value="apple">苹果</option>
                        <option value="banana">香蕉</option>
                        <option value="pear">梨子</option>
                    </select>
                    <input type="submit" value="submit"/>
                </form>
            </div>
        )
    }
}
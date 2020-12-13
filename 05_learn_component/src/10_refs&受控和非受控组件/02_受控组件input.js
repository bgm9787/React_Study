import React, { PureComponent } from 'react'

// 什么是受控组件：
// 使用js函数来方便的处理表单提交，同时还可以访问用户填写的表单数据

export default class App extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            userName: ''
        }
    }
    inputChange = (e) => {
        console.log(e.target.value)
        this.setState({userName: e.target.value})
    }
    formSubmit = (e) => {
        e.preventDefault()
    }
    render() {
        return (
            <div>
                <form onSubmit={this.formSubmit}>
                    <label htmlFor="userName">
                        用户姓名：
                        <input 
                            type="text" 
                            id="userName"
                            onChange={this.inputChange}
                            value={this.state.userName}
                        />
                    </label>
                    <input type="submit" value="submit"/>
                </form>
            </div>
        )
    }
}
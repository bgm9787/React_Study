import React from "react"

import PropTypes from 'prop-types'

// 函数式子组件
function ChildCmp(props) {
    return (
        <>
            <div>{props.name}</div>
            <div>{props.age}</div>
            <ul>{props.sports.map((item) => <li key={item}>{item}</li>)}</ul>
        </>
    )
}

ChildCmp.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number,
    sports: PropTypes.array
}

ChildCmp.defaultProps = {
    name: '123',
    age: 12,
    sports: ['11', '22']
}

// 类组件的属性验证
class ChildCmp2 extends React.Component {
    static propTypes = {

    }

    static defaultProps = {

    }
}

export default class App extends React.Component {
    constructor() {
        super()
    }

    render() {
        return (
            <>
            <ChildCmp name="baoguomei" age={12} sports={['ball', 'run']}/>
            <ChildCmp/>
            </>
        )
    }
}
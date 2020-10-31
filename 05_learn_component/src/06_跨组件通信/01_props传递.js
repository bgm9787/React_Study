import React from "react"

function InfoHeader(props) {
    return (
        <h3>{props.name + ' ' + props.age}</h3>
    )
}


function Info(props) {
    return (
        <div>
            <InfoHeader {...props}/>
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
            <div>
                <Info {...this.state}/>
            </div>
        )
    }
}
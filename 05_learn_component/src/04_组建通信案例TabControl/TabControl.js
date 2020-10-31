import React from "react"

import "./style.css"

export default class App extends React.Component {
    constructor(props) {
        super(props)
        this.state={
            activeItem: 0
        }
    }

    render( ) {
        return (
            <div className="tabHeader">
                {
                    this.props.datas.map((item, index) => {
                        return (
                            <span key={index} 
                                className = { "tabItem"  + ' ' +(index === this.state.activeItem ?  'avtiveItem' : '')}
                                onClick={e => this.clickItem(index)}
                            >
                                {item}
                            </span>
                        )
                    })
                }
            </div>
        )
    }

    clickItem(index) {
        this.setState({ activeItem: index })
        this.props.clickItem(index)
    }
}

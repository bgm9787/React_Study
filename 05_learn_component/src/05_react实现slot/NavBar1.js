import React from "react" 

export default class NavBar extends React.Component {
    render() {
        return (
            <div  className="navBar">
                <span className="navLeft">{this.props.children[0]}</span>
                <span className="navCenter">{this.props.children[1]}</span>
                <span className="navRight">{this.props.children[2]}</span>
            </div>
        )
    }
}
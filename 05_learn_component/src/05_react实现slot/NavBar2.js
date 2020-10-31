import React from "react" 

export default class NavBar extends React.Component {
    render() {
        return (
            <div  className="navBar">
                <span className="navLeft">{this.props.leftBar}</span>
                <span className="navCenter">{this.props.centerBar}</span>
                <span className="navRight">{this.props.rightBar}</span>
            </div>
        )
    }
}

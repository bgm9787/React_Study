import React, { Component } from 'react'

import NavBar from "./NavBar1"

import NavBar2 from "./NavBar2"

import "./index.css"

export default class App extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <>
                <NavBar>
                    <a href="/#">111</a>
                    <p>222</p>
                    <button>333</button>
                </NavBar>

                <NavBar2 leftBar={<a href="/#">444</a>}
                         centerBar={<p>555</p>}
                         rightBar={<button>666</button>}
                >
                </NavBar2>
            </>
        )
    }
}

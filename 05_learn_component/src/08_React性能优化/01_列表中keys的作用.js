import React from "react"

export default class App extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            movies: ['111', '222']
        }
    }

    addItem = () => {
        this.setState({movies: [...this.state.movies, '333']}) // 在尾部加数据，加不加key对性能无意义
        this.setState({movies: ['333', ...this.state.movies]}) // 在前面陈插入数据，key对性能有意义,原有项只会位移
    }

    render() {
        return (
            <>
                <ul>
                    {
                        this.state.movies.map(item => {
                            return <li key={item}>{item}</li>
                        })
                    }
                </ul>
                <button onClick={this.addItem}>add item</button>
            </>
        )
    }
}
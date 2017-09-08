import React, { Component } from 'react';
import { getShelfB } from '../../services/usersService';

export default class ShelfB extends Component {
    constructor() {
        super()
        this.state = {
            shelfB: []
        }
    }

    componentDidMount() {
        getShelfB().then(res => {
            console.log(res)
            this.setState({
                shelfB: res
            })
        })
    }

    render() {

        const shelfB = this.state.shelfB.map((e, i) => {
    return (
        <h3 key={i}>{e.name}</h3>
         )
        })
        return (
            <div>
                <h1>Here is shelfB!</h1>
                <div>{shelfB}</div>
            </div>
        )
    }
}
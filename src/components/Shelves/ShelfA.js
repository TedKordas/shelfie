import React, { Component } from 'react';
import { getShelfA } from '../../services/usersService';

export default class ShelfA extends Component {
    constructor() {
        super()
        this.state = {
            shelfA: []
        }
    }

    componentDidMount() {
        getShelfA().then(res => {
            console.log(res)
            this.setState({
                shelfA: res
            })
        })
    }

    render() {

        const shelfA = this.state.shelfA.map((e, i) => {
    return (
        <h3 key={i}>{e.name}</h3>
         )
        })
        return (
            <div>
                <h1>Here is shelfA!</h1>
                <div>{shelfA}</div>
            </div>
        )
    }
}
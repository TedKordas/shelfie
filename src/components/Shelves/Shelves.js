import React, { Component } from 'react';
import { getAllShelves } from '../../services/usersService';

export default class Shelves extends Component {
    constructor() {
        super()
        this.state = {
            shelves: []
        }
    }

    componentDidMount() {
        getAllShelves().then(res => {
            console.log(res)
            this.setState({
                shelves: res
            })
        })
    }

    render() {

        const shelves = this.state.shelves.map((e, i) => {
    return (
        <h3 key={i}>{e.name}</h3>
         )
        })
        return (
            <div>
                <h1>Here are our shelves!</h1>
                <div>{shelves}</div>
            </div>
        )
    }
}
import React, { Component } from 'react';
import { getAllBin } from '../../services/usersService';

export default class Bin extends Component {
    constructor() {
        super()
        this.state = {
            bin: []
        }
    }

    componentDidMount() {
        getAllBin().then(res => {
            console.log(res)
            this.setState({
                bin: res
            })
        })
    }

    render() {

        const bin = this.state.bin.map((e, i) => {
    return (
        <h3 key={i}>{e.name}</h3>
         )
        })
        return (
            <div>
                <h1>Here is our bin!</h1>
                <div>{bin}</div>
            </div>
        )
    }
}
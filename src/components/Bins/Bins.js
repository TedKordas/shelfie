import React, { Component } from 'react';
import { getAllBins } from '../../services/usersService';

export default class Bins extends Component {
    constructor() {
        super()
        this.state = {
            bins: []
        }
    }

    componentDidMount() {
        getAllBins().then(res => {
            console.log(res)
            this.setState({
                bins: res
            })
        })
    }

    render() {

        const bins = this.state.bins.map((e, i) => {
    return (
        <h3 key={i}>{e.name}</h3>
         )
        })
        return (
            <div>
                <h1>Here are our bins!</h1>
                <div>{bins}</div>
            </div>
        )
    }
}